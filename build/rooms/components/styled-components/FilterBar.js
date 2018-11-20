'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextWrapper = exports.MainText = exports.FixedFilterButton = exports.FilterBarWrapper = exports.FilterBarContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100vw;\n    height: max-content;\n    background-color: #f5f5f5;\n    margin-bottom: 24px;\n'], ['\n    width: 100vw;\n    height: max-content;\n    background-color: #f5f5f5;\n    margin-bottom: 24px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    max-width: 1780px;\n    background-color: #f5f5f5;\n    box-sizing: border-box;\n    padding: 16px 24px;\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    @media(min-width:743px) {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    @media(min-width: 1128px) {\n        padding: 16px 80px;\n    }\n'], ['\n    max-width: 1780px;\n    background-color: #f5f5f5;\n    box-sizing: border-box;\n    padding: 16px 24px;\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    @media(min-width:743px) {\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    @media(min-width: 1128px) {\n        padding: 16px 80px;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: fixed;\n    width: calc(100vw - 80px);\n    height: 48px;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    bottom: 22px;\n    left: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: normal;\n    color: #545658;\n    z-index: 4;\n    cursor: pointer;\n    @media(min-width: 569px) {\n        display: none;\n    }\n'], ['\n    position: fixed;\n    width: calc(100vw - 80px);\n    height: 48px;\n    background-color: #f5f5f5;\n    border-radius: 4px;\n    bottom: 22px;\n    left: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: HelveticaNeue;\n    font-size: 14px;\n    font-weight: normal;\n    color: #545658;\n    z-index: 4;\n    cursor: pointer;\n    @media(min-width: 569px) {\n        display: none;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    height: 44px;\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: #545658;\n    line-height: 1.57;\n    margin: 0;\n'], ['\n    height: 44px;\n    font-family: HelveticaNeue;\n    font-size: 28px;\n    font-weight: bold;\n    font-style: normal;\n    color: #545658;\n    line-height: 1.57;\n    margin: 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n'], ['\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FilterBarContainer = exports.FilterBarContainer = _styledComponents2.default.div(_templateObject);
var FilterBarWrapper = exports.FilterBarWrapper = _styledComponents2.default.div(_templateObject2);
var FixedFilterButton = exports.FixedFilterButton = _styledComponents2.default.div(_templateObject3);
var MainText = exports.MainText = _styledComponents2.default.h1(_templateObject4);
var TextWrapper = exports.TextWrapper = _styledComponents2.default.div(_templateObject5);