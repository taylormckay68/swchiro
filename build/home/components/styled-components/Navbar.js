'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LogoText = exports.Logo = exports.LogoCont = exports.NavbarCont = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    height: 95px;\n    width: 100vw;\n    background: #F5F5F5;\n    display: flex;\n    align-items: center;\n'], ['\n    height: 95px;\n    width: 100vw;\n    background: #F5F5F5;\n    display: flex;\n    align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n'], ['\n    display: flex;\n    align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 90px;\n    width: 90px;\n'], ['\n    height: 90px;\n    width: 90px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: rgb(84, 86, 88);\n'], ['\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: rgb(84, 86, 88);\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarCont = exports.NavbarCont = _styledComponents2.default.div(_templateObject);
var LogoCont = exports.LogoCont = _styledComponents2.default.div(_templateObject2);
var Logo = exports.Logo = _styledComponents2.default.img(_templateObject3);
var LogoText = exports.LogoText = _styledComponents2.default.h1(_templateObject4);