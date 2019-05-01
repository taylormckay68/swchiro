'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = About;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _About = require('./styled-components/About');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
    return _react2.default.createElement(
        _About.AboutWrapper,
        null,
        'About'
    );
}