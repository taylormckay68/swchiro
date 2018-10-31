'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OffClick = exports.RoomIdeasDiv = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100vw;\n    /* overflow-x: hidden; */\n    position: relative;\n'], ['\n    width: 100vw;\n    /* overflow-x: hidden; */\n    position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n'], ['\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RoomIdeasDiv = exports.RoomIdeasDiv = _styledComponents2.default.div(_templateObject);

var OffClick = exports.OffClick = _styledComponents2.default.div(_templateObject2);