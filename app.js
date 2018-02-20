var express             = require('express');
var path                = require('path');
var http                = require('http');
var bodyParser          = require('body-parser');

var app                 = express();

/**
 *  @desc   Configuring server host and port
 */
app.set('port', 8080);

/**
 *  @desc   Parser that are supposed to be inited
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * @desc    Setting the response headers
 */
app.use((req, res, next) => {

    // Request methods you wish to allow
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");

    // Pass to next layer of middleware
    next();
});


/**
 * @desc    Creating API endpoints
 */
// app.use(function (req, res, next) {
//     switch (req.url) {
//         case "/getImages": {
//             app.get('http://tapdiscover.com:9000/design-suggestions/?category=lehenga', (req, res) => {
//                 console.log(res);
//             });
//         }
//     }
//     next();
// });

/**
 * @desc  Point static path to dist
 */
// app.use(express.static(path.join(__dirname, '../dist')));


/**
 * Get our API routes
 */
require("./server/routes")(app);
module.exports = app;


/**
 * @desc  Configuring index file path
 */
// var basePath = './dist';
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, basePath + '/index.html'));
// });
// app.post('*', function (req, res) {
//   res.sendFile(path.join(__dirname, basePath + '/index.html'));
// });


/**
 * @desc    Create HTTP server
 */
const server = http.createServer(app);

/**
 * @desc    Listen on provided port
 */
server.listen(app.get('port'), function () {});

console.log("Server running on http://localhost:8080");
