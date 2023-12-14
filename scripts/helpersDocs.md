# Javascript API

The Javascript API of the eversign package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE` requests to the [eversign API](API_URL_HERE) like this:
```javascript
var response = pkg.eversign.functions.get('/download_raw_document')
var response = pkg.eversign.functions.post('/file', body)
var response = pkg.eversign.functions.post('/file')
var response = pkg.eversign.functions.delete('/document')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/business'
* HTTP Method: 'GET'
```javascript
pkg.eversign.functions.business.get()
```
---
* API URL: '/document'
* HTTP Method: 'GET'
```javascript
pkg.eversign.functions.document.get()
```
---
* API URL: '/document'
* HTTP Method: 'POST'
```javascript
pkg.eversign.functions.document.post(body)
```
---
* API URL: '/document'
* HTTP Method: 'DELETE'
```javascript
pkg.eversign.functions.document.delete()
```
---
* API URL: '/download_final_document'
* HTTP Method: 'GET'
```javascript
pkg.eversign.functions.downloadFinalDocument.get()
```
---
* API URL: '/download_raw_document'
* HTTP Method: 'GET'
```javascript
pkg.eversign.functions.downloadRawDocument.get()
```
---
* API URL: '/file'
* HTTP Method: 'POST'
```javascript
pkg.eversign.functions.file.post(body)
```
---
* API URL: '/send_reminder'
* HTTP Method: 'POST'
```javascript
pkg.eversign.functions.sendReminder.post(body)
```
---

</details>

