'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClearButton = exports.ApplyButton = exports.StyleFilterContainer = exports.StyleFilterWrapper = exports.FilterOptionText = exports.FilterOptionWrapper = exports.FilterOptionContainer = exports.RoomFilterWrapper = exports.StyleButtonWrapper = exports.CheckWrapper = exports.CheckContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    height: 24px;\n    width: 24px;\n    border: 1px solid #f5f5f5;\n    background-color: #ffffff;\n    box-sizing: border-box;\n'], ['\n    height: 24px;\n    width: 24px;\n    border: 1px solid #f5f5f5;\n    background-color: #ffffff;\n    box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    visibility: ', ';\n    /* display: ', '; */\n    height: 24px;\n    width: 24px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    left: 2px;\n    top: 2px;\n'], ['\n    visibility: ', ';\n    /* display: ', '; */\n    height: 24px;\n    width: 24px;\n    display: flex;\n    align-items: center;\n    position: relative;\n    left: 2px;\n    top: 2px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 42px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 12px;\n    box-sizing: border-box;\n'], ['\n    height: 42px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 12px;\n    box-sizing: border-box;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    height: 100%;\n    width: 100%;\n    overflow: scroll;\n'], ['\n    height: 100%;\n    width: 100%;\n    overflow: scroll;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 48px;\n    background-color: #f5f5f5;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    &:hover {\n        background-color: #ffffff;\n    }\n'], ['\n    width: 100%;\n    height: 48px;\n    background-color: #f5f5f5;\n    padding: 0 12px;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    &:hover {\n        background-color: #ffffff;\n    }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    height: 24px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    cursor: ', '\n'], ['\n    height: 24px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    cursor: ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: ', ';\n    line-height: 1.71;\n    color: #545658;\n    margin-left: 8px;\n    opacity: ', '\n'], ['\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: ', ';\n    line-height: 1.71;\n    color: #545658;\n    margin-left: 8px;\n    opacity: ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    height: 264px;\n    width: 100%;\n'], ['\n    height: 264px;\n    width: 100%;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    height: 264px;\n    width: 100%;\n    overflow: scroll;\n'], ['\n    height: 264px;\n    width: 100%;\n    overflow: scroll;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n    width: 38px;\n    height: 24px;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.71;\n    color: #0272a2;\n'], ['\n    width: 38px;\n    height: 24px;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 1.71;\n    color: #0272a2;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n    width: 33px;\n    height: 24px;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    line-height: 1.71;\n    color: #545658;\n'], ['\n    width: 33px;\n    height: 24px;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    line-height: 1.71;\n    color: #545658;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckContainer = exports.CheckContainer = _styledComponents2.default.div(_templateObject);
var CheckWrapper = exports.CheckWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.visible ? 'visible' : 'hidden';
}, function (props) {
    return !props.visible && 'none';
});
var StyleButtonWrapper = exports.StyleButtonWrapper = _styledComponents2.default.div(_templateObject3);
var RoomFilterWrapper = exports.RoomFilterWrapper = _styledComponents2.default.div(_templateObject4);
var FilterOptionContainer = exports.FilterOptionContainer = _styledComponents2.default.div(_templateObject5);
var FilterOptionWrapper = exports.FilterOptionWrapper = _styledComponents2.default.div(_templateObject6, function (props) {
    return props.grayStyle ? 'default' : 'pointer';
});
var FilterOptionText = exports.FilterOptionText = _styledComponents2.default.p(_templateObject7, function (props) {
    return props.bold ? 'bold' : 'normal';
}, function (props) {
    return props.grayStyle ? '.5' : '1';
});
var StyleFilterWrapper = exports.StyleFilterWrapper = _styledComponents2.default.div(_templateObject8);
//Style Filters
var StyleFilterContainer = exports.StyleFilterContainer = _styledComponents2.default.div(_templateObject9);
var ApplyButton = exports.ApplyButton = _styledComponents2.default.div(_templateObject10);
var ClearButton = exports.ClearButton = _styledComponents2.default.div(_templateObject11);