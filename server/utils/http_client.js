var request         = require('request');

exports.getRequest = function (url, headers, qs, callback) {
    headers['Content-Type'] = 'application/json';
    headers['accept'] = 'application/json';
    request.get({
        'uri': url,
        'qs':qs,
        'headers': headers,
        encoding: null
    }, callback);
};
