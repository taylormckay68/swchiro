"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _Root = require("./Root");

var _Root2 = _interopRequireDefault(_Root);

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
_fs2.default.readFile("./dist/js/bundle.min.js", "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  bundle = data || "";
});

function serverPageLoader(req, res) {
  var data = {};
  res.set("Cache-Control", "public, max-age=31557600");
  res.send(returnHTML(data, _Root2.default));
}

app.get("/*", function (req, res) {
  var context = {};
  res.set("Cache-Control", "public, max-age=31557600");
  res.send(returnHTML(context, _Root2.default, req));
});

app.get("/health", function (req, res) {
  return res.send("OK");
});

app.listen(PORT, function () {
  console.log("Running on http://localhost:" + PORT);
});

// functions!!!!!!!!!!!!!

function fetcher(url) {
  return (0, _nodeFetch2.default)(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  }).catch(errHandle);
}

function returnHTML(data, Root, req) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: {} },
    _react2.default.createElement(Root, { data: data })
  )));
  var styles = sheet.getStyleTags();
  return "\n    <!DOCTYPE html>\n      <html lang=\"en\">\n        <head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Southwest Chiropractic</title>\n          <meta name=\"Description\" content=\"Chiropractic office located in South Jordan, UT\">\n        </head>\n        " + styles + "\n        <style>body {margin: 0;}</style>\n        <div id=\"app\">" + body + "</div>\n        <script defer>" + bundle + "</script>\n      </html>\n    ";
}

function errHandle(err) {
  console.log(err);
  res.send(returnHTML(dataObj));
}