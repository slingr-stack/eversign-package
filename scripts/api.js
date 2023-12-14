/////////////////////
// Public API
/////////////////////

exports.listBusinesses = function() {
    return exports.get('/business');
};

exports.createDocument = function(body) {
    if (body.files) {
        body.files.forEach(function(file) {
            // first check if this is a Slingr ID; otherwise leave as it is
            if (file.file_id && file.file_id.length == 24) {
                var uploadedFile = exports.uploadFile(file.name, file.file_id);
                // replace file_id by the one returned by eversign
                file.file_id = uploadedFile.file_id;
            }
        });
    }
    return exports.post('/document', body);
};

exports.createDocumentFromTemplate = function(body) {
    if (!body || !body.template_id) {
        sys.exceptions.throwException('badRequest', 'template_id must be present');
    }
    return exports.post('/document', body);
};

exports.getDocument = function(documentHash) {
    return exports.get('/document', {params: {document_hash: documentHash}});
};

exports.getTemplate = function(templateHash) {
    return exports.get('/document', {params: {document_hash: templateHash}});
};

exports.listDocuments = function(type) {
    if (!type) type = 'all';
    return exports.get('/document', {params: {type: type}});
};

exports.listTemplates = function(type) {
    if (!type) type = 'templates';
    return exports.get('/document', {params: {type: type}});
};

exports.sendReminder = function(documentHash, signerId) {
    return exports.post('/send_reminder', {document_hash: documentHash, signer_id: signerId});
};

exports.deleteDocument = function(documentHash) {
    return exports.delete('/document', {params: {document_hash: documentHash}});
};

exports.deleteTemplate = function(documentHash) {
    return exports.delete('/document', {params: {document_hash: documentHash}});
};

exports.cancelDocument = function(documentHash) {
    return exports.delete('/document', {params: {document_hash: documentHash, cancel: 1}});
};

exports.downloadOriginalDocument = function(documentHash, fileName) {
    var request = {
        path: '/download_raw_document',
        params: {
            document_hash: documentHash
        },
        forceDownload: true,
        downloadSync: true,
        fileName: fileName || 'document.pdf'
    };
    return exports.get(request);
};

exports.downloadFinalDocument = function(documentHash, fileName, auditTrail) {
    var request = {
        path: '/download_final_document',
        params: {
            document_hash: documentHash
        },
        forceDownload: true,
        downloadSync: true,
        fileName: fileName || 'document.pdf'
    };
    if (auditTrail) {
        request.params.audit_trail = 1;
    }
    return exports.get(request);
};

exports.uploadFile = function(name, fileId) {
    return exports.post({
        path: '/file',
        multipart: true,
        parts: [
            {
                name: 'upload',
                type: 'file',
                fileId: fileId
            }
        ]
    });
};

///////////////////////////////////
// Public API - Generic Functions
///////////////////////////////////

exports.get = function(url, options) {
    options = checkHttpOptions(url, options);
    return httpService.get(Eversign(options));
};

exports.post = function(url, options) {
    options = checkHttpOptions(url, options);
    return httpService.post(Eversign(options));
};

exports.delete = function(url, options) {
    options = checkHttpOptions(url, options);
    return httpService.delete(Eversign(options));
};


/////////////////////////////////////
//  Private helpers
////////////////////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);


/****************************************************
 Configurator
 ****************************************************/

var Eversign = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var API_URL = config.get("EVERSIGN_API_BASE_URL"); // TODO: Set the base url for the api in the package.json (Remove this comment after set the url)
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[eversign] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    if (config.get("authenticationMethod") === "apiKey") { // TODO: Set the authentication method, if needed or remove this if (Remove comments after set the url)
        sys.logs.debug('[eversign] Set header apikey');
        headers = mergeJSON(headers, {"Authorization": "API-Key " + config.get("apiKey")});
    } 
    headers = mergeJSON(headers, {"Content-Type": "application/json"});

    options.headers = headers;
    return options;
}


function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
