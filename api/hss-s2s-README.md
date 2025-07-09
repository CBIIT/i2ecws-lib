# HSS-S2S REST Web Service API Specification

This directory contains OpenAPI 3.0.1 specification templates for the HSS-S2S REST Web Service API. The specifications are provided in both JSON and YAML formats:

- `hss-s2s.json` - JSON format specification
- `hss-s2s.yaml` - YAML format specification

## Completing the Specification

These files are templates that need to be completed with the actual API details from the `HSS-S2S-REST-Web-Service-Technical-User-Guide.pdf` document located in the `doc` directory.

### Steps to Complete the Specification

1. Review the `HSS-S2S-REST-Web-Service-Technical-User-Guide.pdf` document to understand the API endpoints, parameters, request/response models, and other details.

2. Update the following sections in the specification files:

   - **Server URLs**: Replace the placeholder URLs with the actual server URLs for different environments.
   
   - **Paths**: Replace the example endpoint with the actual API endpoints described in the document. For each endpoint:
     - Define the HTTP methods (GET, POST, PUT, DELETE, etc.)
     - Add appropriate tags for categorization
     - Provide accurate summary and description
     - Define operation ID
     - Specify parameters (path, query, header)
     - Define request body structure if applicable
     - Define response structures for different status codes
   
   - **Components/Schemas**: Define the actual data models used in requests and responses.
   
   - **Security**: Update the security schemes if different from the JWT bearer token authentication.

3. Validate the completed specification using an OpenAPI validator tool to ensure it follows the OpenAPI 3.0.1 standard.

## Using the Specification

Once completed, this specification can be used to:

1. Generate client libraries using tools like Swagger Codegen
2. Create API documentation
3. Set up API testing
4. Implement server-side validation

## Example Generation Command

To generate a client library using the specification, you can use a command similar to:

```powershell
.\generate.ps1 -InputSpec .\api\hss-s2s.json -ConfigFile .\config-hss-s2s.json
```

Note: You may need to create a configuration file (`config-hss-s2s.json`) similar to other configuration files in the project.
