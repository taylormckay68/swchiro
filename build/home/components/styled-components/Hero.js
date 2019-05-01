'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CallButton = exports.BusinessName = exports.BusinessWrapper = exports.HeroWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    background: url(\'https://s3-us-west-1.amazonaws.com/sw-chiro/slc-valley-min.jpg\');\n    background-size: cover;\n    background-position: center;\n    height: 500px;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n'], ['\n    background: url(\'https://s3-us-west-1.amazonaws.com/sw-chiro/slc-valley-min.jpg\');\n    background-size: cover;\n    background-position: center;\n    height: 500px;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 450px;\n    height: 300px;\n    background-color: rgba(0,0,0,.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n'], ['\n    width: 450px;\n    height: 300px;\n    background-color: rgba(0,0,0,.4);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    color: white;\n    text-align: center;\n    font-size: 50px;\n'], ['\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    color: white;\n    text-align: center;\n    font-size: 50px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: 150px; \n    height: 40px;\n    background-color: white;\n    color: black;\n'], ['\n    width: 150px; \n    height: 40px;\n    background-color: white;\n    color: black;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroWrapper = exports.HeroWrapper = _styledComponents2.default.div(_templateObject);

var BusinessWrapper = exports.BusinessWrapper = _styledComponents2.default.div(_templateObject2);

var BusinessName = exports.BusinessName = _styledComponents2.default.h1(_templateObject3);
var CallButton = exports.CallButton = _styledComponents2.default.button(_templateObject4);