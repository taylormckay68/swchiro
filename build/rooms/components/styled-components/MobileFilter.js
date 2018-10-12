'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MobFilterWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    height: 100vh;\n    width: 100vw;\n    background: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    visibility: ', ';\n    transform: ', ';\n    transition: all .3s ease-in-out;\n    z-index: 1;\n'], ['\n    height: 100vh;\n    width: 100vw;\n    background: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    visibility: ', ';\n    transform: ', ';\n    transition: all .3s ease-in-out;\n    z-index: 1;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MobFilterWrapper = exports.MobFilterWrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return props.visible ? 'visible' : 'hidden';
}, function (props) {
    return props.visible ? 'translateX(0)' : 'translateX(-100vw)';
});