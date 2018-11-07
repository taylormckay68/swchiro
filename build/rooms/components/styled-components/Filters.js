'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyleFilterContainer = exports.FilterOptionText = exports.FilterOptionWrapper = exports.FilterOptionContainer = exports.FilterWrapper = exports.CheckWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    visibility: ', ';\n    /* display: ', '; */\n    height: 24px;\n    width: 24px;\n    display: flex;\n    align-items: center;\n    padding-top: 4px;\n'], ['\n    visibility: ', ';\n    /* display: ', '; */\n    height: 24px;\n    width: 24px;\n    display: flex;\n    align-items: center;\n    padding-top: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    overflow: scroll;\n'], ['\n    height: 100%;\n    width: 100%;\n    overflow: scroll;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 48px;\n    background-color: #f5f5f5;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    &:hover {\n        background-color: #ffffff;\n    }\n'], ['\n    width: 100%;\n    height: 48px;\n    background-color: #f5f5f5;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    &:hover {\n        background-color: #ffffff;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    height: 24px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n'], ['\n    height: 24px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: ', ';\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #545658;\n    margin-left: 8px;\n'], ['\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: ', ';\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #545658;\n    margin-left: 8px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    background: blue;\n'], ['\n    height: 100%;\n    width: 100%;\n    background: blue;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckWrapper = exports.CheckWrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return props.visible ? 'visible' : 'hidden';
}, function (props) {
    return !props.visible && 'none';
});
var FilterWrapper = exports.FilterWrapper = _styledComponents2.default.div(_templateObject2);
var FilterOptionContainer = exports.FilterOptionContainer = _styledComponents2.default.div(_templateObject3);
var FilterOptionWrapper = exports.FilterOptionWrapper = _styledComponents2.default.div(_templateObject4);
var FilterOptionText = exports.FilterOptionText = _styledComponents2.default.p(_templateObject5, function (props) {
    return props.bold ? 'bold' : 'normal';
});
//Style Filters
var StyleFilterContainer = exports.StyleFilterContainer = _styledComponents2.default.div(_templateObject6);