# i2ecws-lib — API-First Code Generation

This repo is the reference implementation for the I2E API-First initiative. It holds all
OpenAPI specs for the I2E portfolio and provides a single unified script to generate
TypeScript Angular clients, Java RestTemplate clients, and Java Spring server interfaces
from those specs.

---

## Quick Start

```powershell
# Generate all specs, all targets
npm run generate

# Generate one spec, all its targets
npm run generate -- --spec sm_i2e_ara_ws

# Generate one spec, one target
npm run generate -- --spec sm_i2e_ara_ws --target java-client

# See what would run without executing
npm run generate -- --dry-run

# List all specs and their enabled targets
npm run generate -- --list
```

---

## Scripts

| Script          | Command                                      | Description                              |
|:----------------|:---------------------------------------------|:-----------------------------------------|
| `generate`      | `node generate.mjs`                          | Run code generation from `specs.yaml`    |
| `fetch`         | `node fetch-api.mjs`                         | Copy specs from local Maven build output |
| `fetch-remote`  | `node fetch-remote-api.mjs`                  | Fetch specs from running dev servers     |
| `convert-specs` | `node convert-specs.mjs`                     | Convert any remaining JSON specs to YAML |
| `vm-list`       | `openapi-generator-cli version-manager list` | List available generator versions        |

All scripts accept `--help` for usage details.

---

## Adding a New Spec

### 1. Obtain the spec file

**For an I2E service** — build the service locally, then copy:
```powershell
npm run fetch -- --spec <name>
```
Or pull from a running dev server:
```powershell
npm run fetch-remote -- --spec <name>
```

**For an external API** — place the YAML file in `api-specs/<name>.yaml` manually.
If you only have JSON, `npm run convert-specs` will convert it.

### 2. Add an entry to `specs.yaml`

**I2E service** (all three targets):
```yaml
- name: sm_i2e_new_ws
  spec: api-specs/sm_i2e_new_ws.yaml
  source: service-workspace/sm_i2e_new_ws   # local project path for cross-linking
  targets:
    typescript-angular:
      npmName: "@cbiit/i2enewws-lib"
    java-client:
      artifactId: sm_i2e_new_ws-client
      apiPackage: gov.nih.nci.cbiit.scimgmt.new.client.api
      modelPackage: gov.nih.nci.cbiit.scimgmt.new.client.dto
      invokerPackage: gov.nih.nci.cbiit.scimgmt.new.client.invoker
    java-server:
      artifactId: sm_i2e_new_ws-server
      apiPackage: gov.nih.nci.cbiit.scimgmt.new.server.api
      modelPackage: gov.nih.nci.cbiit.scimgmt.new.server.dto
      configPackage: gov.nih.nci.cbiit.scimgmt.new.server.config
```

**External/legacy API** (java-client only):
```yaml
- name: some-external-api
  spec: api-specs/some-external-api.yaml
  docs: https://link-to-api-docs-or-wiki-page
  targets:
    java-client:
      artifactId: some-external-api-client
      modelNameSuffix: Dto            # add if spec models do not already end in Dto
      apiPackage: gov.nih.nci.cbiit.scimgmt.external.client.api
      modelPackage: gov.nih.nci.cbiit.scimgmt.external.client.dto
      invokerPackage: gov.nih.nci.cbiit.scimgmt.external.client.invoker
```

### 3. Generate

```powershell
npm run generate -- --spec <name>
```

---

## Output Structure

```
output/
└── <spec-name>/
    ├── typescript-angular/   Angular service + model classes
    ├── java-client/          Java RestTemplate client
    └── java-server/          Java Spring server interfaces (interfaceOnly=true)
```

The `output/` directory is git-ignored. Generated code is meant to be copied into the
target service project, not committed here.

---

## specs.yaml — Manifest Reference

| Field     | Required       | Description                                                              |
|:----------|:---------------|:-------------------------------------------------------------------------|
| `name`    | ✅              | Unique identifier; becomes the `output/<name>/` directory                |
| `spec`    | ✅              | Path to the OpenAPI spec (YAML) relative to repo root                    |
| `source`  | I2E specs      | Local project directory (relative to workspace root) that owns this spec |
| `docs`    | External specs | Wiki doc path or URL documenting the external API                        |
| `targets` | ✅              | One key per enabled generator; values merge with `defaults`              |

Generator keys: `typescript-angular` · `java-client` · `java-server`

The `defaults` section at the top of `specs.yaml` applies to all specs of each type.
Per-spec values override defaults at the key level (shallow merge).

> **Key rule:** Do NOT set `modelNameSuffix: Dto` for I2E services — their specs already
> use `Dto`-suffixed model names. Set it explicitly only on external specs whose models
> do not already have a `Dto` suffix.

---

## Template Management

No custom templates are currently active. All three generators run on their built-in
defaults. If you need to override a template, place only the changed file(s) under the
corresponding folder — the generator falls back to built-in defaults for any file not
present:

| Folder                          | Generator            | Purpose                                     |
|:--------------------------------|:---------------------|:--------------------------------------------|
| `templates/typescript-angular/` | `typescript-angular` | Angular services + models                   |
| `templates/java-client/`        | `java`               | RestTemplate client for inter-service calls |
| `templates/java-server/`        | `spring`             | Server interfaces (`interfaceOnly=true`)    |

See `templates/TEMPLATE-GUIDE.md` for the customization standard and a variable
migration table (swagger-codegen → openapi-generator Mustache variables).

---

## Configuring Base Paths in Consuming Services

Generated `ApiClient` classes contain a hard-coded default base path from the spec's
`servers[0].url`. **Do not modify templates to inject `@Value`** — instead, declare a
`@Configuration` class in each consuming Spring Boot service:

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

Then set the property per tier in `application-<profile>.properties`:

```properties
# DEV
sm.mail.base-path=https://ncias-d1234-v/i2emailsvc
```

Use `sm.<service-short-name>.base-path` as the convention so all client base paths are
discoverable in one place. The default value (after the `:` in `@Value`) should be the
`localhost` URL for local development.

---

## Updating Specs

When an I2E service's API changes, pull a fresh spec before regenerating:

```powershell
# From a local build (requires mvnw clean package in the service project first)
npm run fetch -- --spec sm_i2e_ara_ws

# From a running dev server (requires VPN / dev network)
npm run fetch-remote -- --spec sm_i2e_ara_ws
```

Both scripts write YAML directly to `api-specs/`. Set `WORKSPACE_ROOT` or `DEV_HOST`
environment variables to override the default paths/hostname.
