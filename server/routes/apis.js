var express         = require('express'),
    router          = express.Router();

var client          = require('../utils/http_client');

const getImageApi   = 'http://tapdiscover.com:9000/design-suggestions';

router.get('/getImages', function(req, res) {

    var url = getImageApi;

    client.getRequest(url, req.headers, {}, function(error, response, body) {
        if (error) {
            console.log("getImageApi error: ", error);
            return;
        }

        res.set(response.headers);
        console.log('request headers: ', req.headers);
        console.log('getImageApi Response: ', response.headers, response.body);
        var response_body = JSON.parse(response.body.toString('utf8'));
        return res.status(response.statusCode).send(response_body);
    });

});

module.exports = router;
