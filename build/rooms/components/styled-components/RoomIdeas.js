'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadMore = exports.OffClick = exports.RoomIdeasDiv = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100vw;\n    /* overflow-x: hidden; */\n    position: relative;\n'], ['\n    width: 100vw;\n    /* overflow-x: hidden; */\n    position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n'], ['\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 200px;\n    height: 34px;\n    background-color: #2F3337;\n    color: #fff;\n    border-radius: 1px;\n    font-size: 14px;\n    font-family: "Helvetica Neue",Helvetica,Arial;\n    font-weight: 400;\n    margin: -56px auto 16px;\n    display: flex;\n    justify-content: center;\n'], ['\n    width: 200px;\n    height: 34px;\n    background-color: #2F3337;\n    color: #fff;\n    border-radius: 1px;\n    font-size: 14px;\n    font-family: "Helvetica Neue",Helvetica,Arial;\n    font-weight: 400;\n    margin: -56px auto 16px;\n    display: flex;\n    justify-content: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RoomIdeasDiv = exports.RoomIdeasDiv = _styledComponents2.default.div(_templateObject);

var OffClick = exports.OffClick = _styledComponents2.default.div(_templateObject2);
var LoadMore = exports.LoadMore = _styledComponents2.default.button(_templateObject3);