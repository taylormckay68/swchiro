'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = document.getElementById('bd');
if (main && window) (0, _reactDom.hydrate)(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(_Main2.default, null)
), document.getElementById('bd'));