'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextWrapper = exports.RoomIdeasText = exports.MainText = exports.FilterButtonWrapper = exports.FilterButtonText = exports.FilterButtonInnerCont = exports.FilterButtonArrow = exports.FilterButton = exports.FilterBarWrapper = exports.ArrowWrapper = exports.ArrowContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 24px;\n    height: 24px;\n    '], ['\n    width: 24px;\n    height: 24px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: 24px;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    @media(min-width: 1128px) {\n        margin-left: -24px;\n    }\n'], ['\n    height: 24px;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    @media(min-width: 1128px) {\n        margin-left: -24px;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100vw;\n    background-color: #f5f5f5;\n    box-sizing: border-box;\n    padding: 16px 24px;\n    display: flex;\n    flex-direction: column;\n    @media(min-width:743px) {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    @media(min-width: 1128px) {\n        padding: 16px 80px;\n    }\n'], ['\n    width: 100vw;\n    background-color: #f5f5f5;\n    box-sizing: border-box;\n    padding: 16px 24px;\n    display: flex;\n    flex-direction: column;\n    @media(min-width:743px) {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    @media(min-width: 1128px) {\n        padding: 16px 80px;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    height: 44px;\n    width: 100px;\n    border-radius: 22px;\n    border: solid 1px #d5d5d5;\n    display: flex;\n    align-items: center;\n    &:nth-child(n+2){\n        margin-left: 8px;\n    }\n'], ['\n    height: 44px;\n    width: 100px;\n    border-radius: 22px;\n    border: solid 1px #d5d5d5;\n    display: flex;\n    align-items: center;\n    &:nth-child(n+2){\n        margin-left: 8px;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    margin-right: 16px;\n'], ['\n    margin-right: 16px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    margin-left: 16px;\n    justify-content: space-between;\n    width: 100%;\n'], ['\n    display: flex;\n    align-items: center;\n    margin-left: 16px;\n    justify-content: space-between;\n    width: 100%;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #545658;\n'], ['\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #545658;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    display: none;\n    margin-top: 16px;\n    @media(min-width: 569px) {\n        display: flex;\n    }\n    @media(min-width:743px) {\n        align-items: flex-end;\n    }\n'], ['\n    display: none;\n    margin-top: 16px;\n    @media(min-width: 569px) {\n        display: flex;\n    }\n    @media(min-width:743px) {\n        align-items: flex-end;\n    }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    height: 44px;\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: #545658;\n    line-height: 1.57;\n'], ['\n    height: 44px;\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: #545658;\n    line-height: 1.57;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n    font-size: 12px;\n    height: 24px;\n    width: 76px;\n    line-height: 26px;\n    font-family: HelveticaNeue;\n    font-weight: normal;\n    color: #545658;\n    margin-left: 12px;\n'], ['\n    font-size: 12px;\n    height: 24px;\n    width: 76px;\n    line-height: 26px;\n    font-family: HelveticaNeue;\n    font-weight: normal;\n    color: #545658;\n    margin-left: 12px;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n    /* height: 100%; */\n'], ['\n    /* height: 100%; */\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArrowContainer = exports.ArrowContainer = _styledComponents2.default.div(_templateObject);
var ArrowWrapper = exports.ArrowWrapper = _styledComponents2.default.div(_templateObject2);
var FilterBarWrapper = exports.FilterBarWrapper = _styledComponents2.default.div(_templateObject3);
var FilterButton = exports.FilterButton = _styledComponents2.default.div(_templateObject4);
var FilterButtonArrow = exports.FilterButtonArrow = _styledComponents2.default.div(_templateObject5);
var FilterButtonInnerCont = exports.FilterButtonInnerCont = _styledComponents2.default.div(_templateObject6);
var FilterButtonText = exports.FilterButtonText = _styledComponents2.default.div(_templateObject7);
var FilterButtonWrapper = exports.FilterButtonWrapper = _styledComponents2.default.div(_templateObject8);
var MainText = exports.MainText = _styledComponents2.default.div(_templateObject9);
var RoomIdeasText = exports.RoomIdeasText = _styledComponents2.default.div(_templateObject10);
var TextWrapper = exports.TextWrapper = _styledComponents2.default.div(_templateObject11);