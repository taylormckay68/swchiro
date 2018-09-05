'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArrowContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    opacity: 1;\n    width: 32px;\n    height: 42px;\n    position: absolute;\n    right: ', ';\n    left: ', ';\n    top: 0;\n    bottom: ', ';\n    margin: auto;\n    border-radius: 3px;\n    border: 1px solid #DADCDF;\n    background-color: white;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n    display: none;\n    @media only screen and (min-width: 1128px) {\n        display:  ', ';\n    }\n    @media only screen and (min-width: 1510px) {\n        display:  ', ';\n    }\n    @media only screen and (min-width: 1780px) {\n        display:  ', ';\n    }\n    svg {\n        position: absolute;\n        top: 12px;\n        bottom: 12px;\n        left: 7px;\n        right: 7px;\n        margin: auto;\n    }\n    &:hover {\n        cursor: pointer;\n        opacity: 0.8;\n    }\n'], ['\n    opacity: 1;\n    width: 32px;\n    height: 42px;\n    position: absolute;\n    right: ', ';\n    left: ', ';\n    top: 0;\n    bottom: ', ';\n    margin: auto;\n    border-radius: 3px;\n    border: 1px solid #DADCDF;\n    background-color: white;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n    display: none;\n    @media only screen and (min-width: 1128px) {\n        display:  ', ';\n    }\n    @media only screen and (min-width: 1510px) {\n        display:  ', ';\n    }\n    @media only screen and (min-width: 1780px) {\n        display:  ', ';\n    }\n    svg {\n        position: absolute;\n        top: 12px;\n        bottom: 12px;\n        left: 7px;\n        right: 7px;\n        margin: auto;\n    }\n    &:hover {\n        cursor: pointer;\n        opacity: 0.8;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ArrowContainer = exports.ArrowContainer = _styledComponents2.default.div(_templateObject, function (props) {
    return props.right ? '-16px' : '';
}, function (props) {
    return props.right ? '' : '-16px';
}, function (props) {
    return props.bump30 ? '30px' : '0';
}, function (props) {
    if (props.right) return props.position + 4 < props.images ? 'block' : 'none';else return props.position === 0 ? 'none' : 'block';
}, function (props) {
    if (props.right) return props.position + 5 < props.images ? 'block' : 'none';else return props.position === 0 ? 'none' : 'block';
}, function (props) {
    if (props.right) return props.position + 6 < props.images ? 'block' : 'none';else return props.position === 0 ? 'none' : 'block';
});