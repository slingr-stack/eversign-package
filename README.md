# Overview

Repo: [https://github.com/slingr-stack/eversign-package](https://github.com/slingr-stack/eversign-package)

The Eversign [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) has the following features:
 
- Access to the entire REST API
- Handling of webhooks

Please review the Eversign documentation, as the features are based on its API:

- [API Documentation](https://eversign.com/api/documentation)

## Configuration

Before configuring the package, you need an Eversign account.

#### API Key

This is the API key of the Eversign account.

**Name**: `apiKey`
**Type**: text
**Mandatory**: true

#### Business ID

The business ID to use in all requests. If not specified, the system will automatically use the business ID linked to your account, or the first available business ID in case of multiple accounts.

**Name**: `businessId`
**Type**: text

#### Webhook URL

This is the URL you should configure in the webhook of your Eversign account.

**Name**: `webhook`
**Type**: label

##### Eversign API URL

This is the URL you should set in the webhook configuration of your Eversign account.(Take a look at the [Eversign documentation](https://eversign.com/api/documentation/).)

**Name**: `EVERSIGN_API_BASE_URL`
**Type**: label

# Javascript API

The JavaScript API allows you to make HTTP requests.

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

## Dependencies
* HTTP Service

## Events
### Webhook

Eversign's webhooks allow your application to receive notifications about specific events that occur within your EverSign account, such as when a document is signed.
Please refer to the Eversign webhooks [documentation](https://help.eversign.com/hc/en-us/articles/9170555745565-Webhooks) for more information on how to configure them.

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
