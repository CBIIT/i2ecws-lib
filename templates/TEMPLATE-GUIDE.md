# Template Guide — i2ecws-lib

This guide covers how openapi-generator-cli templates work, the "only override what you
need" rule, the variable reference for migrating templates from swagger-codegen, and the
recommended pattern for per-tier base path configuration in consuming services.

> **Current status:** No custom templates are active. All three generators run on
> built-in defaults. See [Base Path Configuration](#base-path-configuration) for how
> consuming services configure tier-specific URLs without template overrides.

---

## Folder-to-Generator Mapping

| Directory                       | Generator (`-g`)     | Library        | Used for                                                                      |
|:--------------------------------|:---------------------|:---------------|:------------------------------------------------------------------------------|
| `templates/typescript-angular/` | `typescript-angular` | —              | Angular HttpClient services + model classes → `@cbiit/i2ecws-lib` npm package |
| `templates/java-client/`        | `java`               | `resttemplate` | Java RestTemplate client jars for inter-service calls                         |
| `templates/java-server/`        | `spring`             | —              | Spring Boot 3 server interface stubs (`interfaceOnly: true`)                  |

The `-g` and `library` values come from `specs.yaml` defaults and per-spec overrides.
`generate.mjs` passes `-t <dir>` automatically when a template directory exists; if it
doesn't exist, the generator uses its built-in defaults without error. With no custom
template directories present, all generation uses generator built-ins.

---

## Base Path Configuration

Generated `ApiClient` classes have a `setBasePath(String)` method and a hard-coded
default from the spec's `servers[0].url`. **Do not override the template to inject
`@Value`** — instead, declare a `@Configuration` in each consuming Spring Boot service:

```java
@Configuration
public class MailServiceClientConfig {

    @Value("${sm.mail.base-path:http://localhost/i2emailsvc}")
    private String basePath;

    @Bean
    public ApiClient mailApiClient() {
        return new ApiClient().setBasePath(basePath);
    }

    @Bean
    public MailOperationsApi mailOperationsApi(ApiClient mailApiClient) {
        return new MailOperationsApi(mailApiClient);
    }
}
```

Then in each tier's `application.properties` (or `application-<profile>.properties`):

```properties
sm.mail.base-path=https://ncias-d1234-v/i2emailsvc
```

**Advantages over the `@Value`-in-template approach:**
- Zero template customization to maintain
- Each consuming service uses its own property name and default
- Base path is a first-class Spring bean — easily mocked in tests

---

## Only Override What You Need

openapi-generator-cli merges your custom templates with its built-in template set. You
only need to include files that differ from the generator defaults. If a template file
you provide is identical to the built-in, it adds maintenance burden with no benefit.

**To find the default templates for a generator**, run:

```powershell
# List built-in templates for a generator (outputs to ./out-templates/<generator>/)
npx openapi-generator-cli author template -g typescript-angular -o out-templates/typescript-angular
npx openapi-generator-cli author template -g java -o out-templates/java
npx openapi-generator-cli author template -g spring -o out-templates/spring
```

Then diff your custom files against the extracted defaults:

```powershell
# Example: compare your model.mustache against the generator default
diff templates/typescript-angular/model.mustache out-templates/typescript-angular/model.mustache
```

**Current known customizations:** None. All targets use generator built-in templates.

If you add a customization, document it here.

---

## Generator Version

The generator JAR version is pinned in `openapitools.json`:

```json
{
  "generator-cli": {
    "version": "7.16.0"
  }
}
```

To see available versions: `npm run vm-list`

When upgrading, re-extract the default templates with `author template` and diff against
your custom files. If a built-in template has changed in a way that conflicts with your
customizations, resolve them before running generation.

---

## Mustache Variable Reference

### openapi-generator Variable Conventions

| Syntax                    | Meaning                                            |
|:--------------------------|:---------------------------------------------------|
| `{{variable}}`            | HTML-escaped output                                |
| `{{{variable}}}`          | Unescaped output (use for type names, class names) |
| `{{#flag}}...{{/flag}}`   | Conditional block (truthy)                         |
| `{{^flag}}...{{/flag}}`   | Conditional block (falsy / negated)                |
| `{{#list}}...{{/list}}`   | Loop over a list                                   |
| `{{>partial}}`            | Include a partial template                         |
| `{{#-last}}...{{/-last}}` | True only for the last element in a loop           |
| `{{^-last}}...{{^-last}}` | True for all elements except the last              |

### swagger-codegen → openapi-generator Migration Table

If you import a template from swagger-codegen or encounter one with these variables,
replace them as follows:

| swagger-codegen            | openapi-generator          | Notes                                                     |
|:---------------------------|:---------------------------|:----------------------------------------------------------|
| `{{#isListContainer}}`     | `{{#isArray}}`             | Removed in openapi-generator v6                           |
| `{{/isListContainer}}`     | `{{/isArray}}`             |                                                           |
| `{{^isListContainer}}`     | `{{^isArray}}`             |                                                           |
| `{{#isMapContainer}}`      | `{{#isMap}}`               | Removed in openapi-generator v6                           |
| `{{/isMapContainer}}`      | `{{/isMap}}`               |                                                           |
| `{{^isMapContainer}}`      | `{{^isMap}}`               |                                                           |
| `{{datatype}}` (lowercase) | `{{dataType}}` (camelCase) | Was already `{{dataType}}` in v5+                         |
| `{{#hasMore}}`             | `{{^-last}}`               | `hasMore` was removed; use Mustache native `-last`        |
| `{{^hasMore}}`             | `{{#-last}}`               |                                                           |
| `{{#secondaryParam}}`      | `{{^-last}}`               | swagger-codegen param separator; not in openapi-generator |
| `{{/secondaryParam}}`      | `{{/-last}}`               |                                                           |

### Commonly Used openapi-generator Variables

**Operation-level** (inside `{{#operations}}{{#operation}}...{{/operation}}{{/operations}}`):

| Variable                     | Type   | Description                      |
|:-----------------------------|:-------|:---------------------------------|
| `{{operationId}}`            | string | camelCase operation ID           |
| `{{httpMethod}}`             | string | `GET`, `POST`, etc.              |
| `{{path}}`                   | string | URL path                         |
| `{{summary}}`                | string | Operation summary                |
| `{{allParams}}`              | list   | All parameters                   |
| `{{queryParams}}`            | list   | Query parameters                 |
| `{{pathParams}}`             | list   | Path parameters                  |
| `{{bodyParam}}`              | object | Request body parameter           |
| `{{returnType}}`             | string | Return type name                 |
| `{{#returnTypeIsPrimitive}}` | flag   | True if return type is primitive |

**Parameter-level** (inside `{{#allParams}}...{{/allParams}}`):

| Variable               | Type   | Description                                     |
|:-----------------------|:-------|:------------------------------------------------|
| `{{paramName}}`        | string | camelCase parameter name                        |
| `{{{dataType}}}`       | string | Type name (triple-brace to avoid HTML escaping) |
| `{{#required}}`        | flag   | Required parameter                              |
| `{{#isArray}}`         | flag   | Array type                                      |
| `{{#isMap}}`           | flag   | Map type                                        |
| `{{#isPrimitiveType}}` | flag   | Primitive type                                  |
| `{{#isBodyParam}}`     | flag   | Body parameter                                  |
| `{{#isQueryParam}}`    | flag   | Query parameter                                 |
| `{{#isPathParam}}`     | flag   | Path parameter                                  |

**Model-level** (inside `{{#models}}{{#model}}...{{/model}}{{/models}}`):

| Variable            | Type   | Description                  |
|:--------------------|:-------|:-----------------------------|
| `{{classname}}`     | string | PascalCase class name        |
| `{{{description}}}` | string | Model description            |
| `{{#isEnum}}`       | flag   | Enum model                   |
| `{{#vars}}`         | list   | All model properties         |
| `{{#allVars}}`      | list   | All vars including inherited |
| `{{#requiredVars}}` | list   | Required vars only           |

**Property-level** (inside `{{#vars}}...{{/vars}}`):

| Variable          | Type   | Description             |
|:------------------|:-------|:------------------------|
| `{{name}}`        | string | camelCase property name |
| `{{{dataType}}}`  | string | Type name               |
| `{{#required}}`   | flag   | Required property       |
| `{{#isNullable}}` | flag   | Nullable property       |
| `{{#isEnum}}`     | flag   | Inline enum property    |
| `{{#isArray}}`    | flag   | Array type              |
| `{{#isMap}}`      | flag   | Map type                |

---

## Adding a New Template Override

1. Extract the defaults for the relevant generator (see commands above).
2. Copy only the file(s) you need to modify into `templates/<target>/`.
3. Make your changes.
4. Run `npm run generate -- --spec <any-spec> --target <target> --dry-run` to confirm
   the template directory is picked up.
5. Run a full generation and inspect the output.

**Do not copy entire generator default sets wholesale** — this makes upgrades painful
and obscures which files are actually customized.
