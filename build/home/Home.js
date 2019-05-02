'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('./components/styled-components/Home');

var _Hero = require('./components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
    return _react2.default.createElement(
        _Home.HomeWrapper,
        null,
        _react2.default.createElement(_Hero2.default, null)
    );
}