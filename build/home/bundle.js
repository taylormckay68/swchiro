'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var home = document.getElementById('userActiveHome');
if (home && window) (0, _reactDom.render)(_react2.default.createElement(_Root2.default, { data: window.__LPO__ }), document.getElementById('userActiveHome'));