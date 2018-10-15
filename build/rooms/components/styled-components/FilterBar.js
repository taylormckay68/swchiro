'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextWrapper = exports.RoomIdeasText = exports.MainText = exports.FixedFilterButton = exports.FilterBarWrapper = exports.ArrowWrapper = exports.ArrowContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 24px;\n    height: 24px;\n    '], ['\n    width: 24px;\n    height: 24px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: 24px;\n    width: max-content;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    cursor: pointer;\n    @media(min-width: 1128px) {\n        margin-left: -24px;\n    }\n'], ['\n    height: 24px;\n    width: max-content;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    cursor: pointer;\n    @media(min-width: 1128px) {\n        margin-left: -24px;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100vw;\n    background-color: #f5f5f5;\n    box-sizing: border-box;\n    padding: 16px 24px;\n    display: flex;\n    flex-direction: column;\n    @media(min-width:743px) {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    @media(min-width: 1128px) {\n        padding: 16px 80px;\n    }\n'], ['\n    width: 100vw;\n    background-color: #f5f5f5;\n    box-sizing: border-box;\n    padding: 16px 24px;\n    display: flex;\n    flex-direction: column;\n    @media(min-width:743px) {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    @media(min-width: 1128px) {\n        padding: 16px 80px;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    position: fixed;\n    width: calc(100vw - 80px);\n    height: 48px;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    bottom: 22px;\n    left: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: normal;\n    color: #545658;\n    cursor: pointer;\n    @media(min-width: 569px) {\n        display: none;\n    }\n'], ['\n    position: fixed;\n    width: calc(100vw - 80px);\n    height: 48px;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    bottom: 22px;\n    left: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: normal;\n    color: #545658;\n    cursor: pointer;\n    @media(min-width: 569px) {\n        display: none;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    height: 44px;\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: #545658;\n    line-height: 1.57;\n'], ['\n    height: 44px;\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: #545658;\n    line-height: 1.57;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    font-size: 12px;\n    height: 24px;\n    width: 76px;\n    line-height: 26px;\n    font-family: HelveticaNeue;\n    font-weight: normal;\n    color: #545658;\n    margin-left: 12px;\n'], ['\n    font-size: 12px;\n    height: 24px;\n    width: 76px;\n    line-height: 26px;\n    font-family: HelveticaNeue;\n    font-weight: normal;\n    color: #545658;\n    margin-left: 12px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n'], ['\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArrowContainer = exports.ArrowContainer = _styledComponents2.default.div(_templateObject);
var ArrowWrapper = exports.ArrowWrapper = _styledComponents2.default.div(_templateObject2);
var FilterBarWrapper = exports.FilterBarWrapper = _styledComponents2.default.div(_templateObject3);
var FixedFilterButton = exports.FixedFilterButton = _styledComponents2.default.div(_templateObject4);
var MainText = exports.MainText = _styledComponents2.default.div(_templateObject5);
var RoomIdeasText = exports.RoomIdeasText = _styledComponents2.default.div(_templateObject6);
var TextWrapper = exports.TextWrapper = _styledComponents2.default.div(_templateObject7);