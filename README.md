<table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Eversign package</td>
        <td>December 14, 2023</td>
        <td>Detailed description of the API of the Eversign package.</td>
    </tr>
    </tbody>
</table>

# Overview

The Eversign endpoint has the following features:
 
- Access to the whole REST API
- Helpers for the API methods
- Uploading and downloading of files integrated with SLINGR's features
- Handling of webhooks

Please make sure you take a look at the documentation from Eversign as features are based on its API:

- [API Documentation](https://eversign.com/api/documentation)

## Configuration

Before configuring the endpoint you will need to have an account in Eversign. 

### API key

This is the API key of the Eversign account.

### Business ID

The business ID to use in all request. If not specified the default one will be used.

### Sandbox

Indicates if the sandbox will be use, which is useful for testing.

### Webhook URL

This is the URL you should configure in the webhook of your Eversign account.

# Javascript API

The Javascript API of the eversign package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE` requests to the [eversign API](API_URL_HERE) like this:
```javascript
var response = pkg.eversign.api.get('/download_raw_document')
var response = pkg.eversign.api.post('/file', body)
var response = pkg.eversign.api.post('/file')
var response = pkg.eversign.api.delete('/document')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
