'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Home = require('./Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Services = require('./Services/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Contact = require('./Contact/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/services', component: _Services2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default })
);