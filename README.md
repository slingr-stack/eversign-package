# Overview

Repo: [https://github.com/slingr-stack/eversign-package](https://github.com/slingr-stack/eversign-package)

The Eversign [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) has the following features:
 
- Access to the whole REST API
- Handling of webhooks

Please make sure you take a look at the documentation from Eversign as features are based on its API:

- [API Documentation](https://eversign.com/api/documentation)

## Configuration

Before configuring the package you will need to have an account in Eversign. 

### API Key

This is the API key of the Eversign account.


**Name**: `apiKey`
**Type**: text
**Mandatory**: true

### Business ID

The business ID to use in all request. If not specified the default one will be used.

**Name**: `businessId`
**Type**: text
**Mandatory**: true

### Webhook URL

This is the URL you should configure in the webhook of your Eversign account.

**Name**: `webhook`
**Type**: label

#### Eversign Api URL
The URL of the Eversign API where the requests are performed.
(Take a look at the [Eversign documentation](https://eversign.com/api/documentation/).)

**Name**: `EVERSIGN_API_BASE_URL`
**Type**: label

# Javascript API

The Javascript API allows you to make HTTP requests.

## HTTP requests
You can make `GET`,`POST`,`DELETE` requests to the [Eversign API](https://eversign.com/api/documentation/methods) like this:
```javascript
var response = pkg.eversign.api.get('/download_raw_document')
var response = pkg.eversign.api.post('/file', body)
var response = pkg.eversign.api.post('/file')
var response = pkg.eversign.api.delete('/document')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

[More info about Slingr](https://slingr.io)

## Dependencies
* HTTP Service

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
