"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _Root = require("./Root");

var _Root2 = _interopRequireDefault(_Root);

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_Root2.default, null)));
  var styles = sheet.getStyleTags();
  res.send("\n      " + styles + "\n      <div id=\"app\">\n        " + body + "\n      </div>\n    ");
});

app.get('/health', function (req, res) {
  return res.send('OK');
});

app.listen(PORT, function () {
  console.log("Running on http://localhost:" + PORT);
});