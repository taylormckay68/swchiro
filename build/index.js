"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _Root = require("./home/Root");

var _Root2 = _interopRequireDefault(_Root);

var _Root3 = require("./room/Root");

var _Root4 = _interopRequireDefault(_Root3);

var _Root5 = require("./rooms/Root");

var _Root6 = _interopRequireDefault(_Root5);

var _styledComponents = require("styled-components");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();
app.use((0, _compression2.default)());

var bundle = "";
var dataObj = {};
_fs2.default.readFile('./dist/js/bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  bundle = data || "";
});

app.get('/rooms/:id', function (req, res) {
  var rooms = dataObj.rooms = {};
  rooms.queries = req.query;
  rooms.id = req.params.id;
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(dataObj, _Root6.default));
});

app.get('/room/:id', function (req, res) {
  dataObj.params = req.params.id;
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(dataObj, _Root4.default));
});

app.get('/', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(dataObj, _Root2.default));
});

app.get('/health', function (req, res) {
  return res.send('OK');
});

app.listen(PORT, function () {
  console.log("Running on http://localhost:" + PORT);
});

// functions!!!!!!!!!!!!!


function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch2.default)(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  }).catch(errHandle);
}

function returnHTML(data, Root) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(Root, { data: data })));
  var styles = sheet.getStyleTags();
  return "\n      <html>\n        <head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Overstock Shop By Room</title>\n          <meta name=\"Description\" content=\"Welcome new movers. Overstock provides you will all of your moving needs and new home styles.\">\n        </head>\n        <script>window.__LPO__=" + dataString + "</script>\n        " + styles + "\n        <style>body {margin: 0;}</style>\n        <div id=\"app\">" + body + "</div>\n        <script defer>" + bundle + "</script>\n      </html>\n    ";
}

function errHandle(err) {
  console.log(err);
  res.send(returnHTML(dataObj));
}