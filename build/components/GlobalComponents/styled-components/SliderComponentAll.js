'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SliderSlotAll = exports.SliderContainerAll = exports.OverflowWrapperAll = exports.SliderWrapperAll = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    height: auto;\n    position: relative;\n    background: ', ';\n    transition: ', ';\n    opacity: ', ';\n    @media only screen and (min-width: 1128px) {\n        width: 1032px;\n        margin: auto;\n    }\n'], ['\n    height: auto;\n    position: relative;\n    background: ', ';\n    transition: ', ';\n    opacity: ', ';\n    @media only screen and (min-width: 1128px) {\n        width: 1032px;\n        margin: auto;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n    max-height: ', ';\n    opacity: ', ';\n    padding: ', ';\n    transition: ', ';\n'], ['\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n    max-height: ', ';\n    opacity: ', ';\n    padding: ', ';\n    transition: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n   display: flex;\n    margin-left: 24px;\n\n    transition: ', ';\n\n    transform: ', ';\n\n     @media only screen and (min-width: 570px) {\n        transform: ', ';\n    }\n\n    @media only screen and (min-width: 744px) {\n        transform: ', ';\n    }\n\n    @media only screen and (min-width: 970px) {\n        transform: ', ';\n    }\n\n    @media only screen and (min-width: 1128px) {\n        margin-left: 0px;\n        transform: ', ';\n    }\n'], ['\n   display: flex;\n    margin-left: 24px;\n\n    transition: ', ';\n\n    transform: ', ';\n\n     @media only screen and (min-width: 570px) {\n        transform: ', ';\n    }\n\n    @media only screen and (min-width: 744px) {\n        transform: ', ';\n    }\n\n    @media only screen and (min-width: 970px) {\n        transform: ', ';\n    }\n\n    @media only screen and (min-width: 1128px) {\n        margin-left: 0px;\n        transform: ', ';\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    position: relative;\n    flex: 1 0 ', ';\n    margin-right: 12px;\n    height: inherit;\n    flex-flow: column;\n\n     @media only screen and (min-width: 570px) {\n        flex: 1 0 ', ';\n        margin-right: 16px;\n     }\n    @media only screen and (min-width: 744px) {\n        flex: 1 0 ', ';\n        margin-right: 16px;\n    }\n\n    @media only screen and (min-width: 970px) {\n        flex: 1 0 ', ';\n    }\n\n    @media only screen and (min-width: 1128px) {\n        flex: 1 0 23.837209%;\n        margin-right: ', '\n    }\n'], ['\n    position: relative;\n    flex: 1 0 ', ';\n    margin-right: 12px;\n    height: inherit;\n    flex-flow: column;\n\n     @media only screen and (min-width: 570px) {\n        flex: 1 0 ', ';\n        margin-right: 16px;\n     }\n    @media only screen and (min-width: 744px) {\n        flex: 1 0 ', ';\n        margin-right: 16px;\n    }\n\n    @media only screen and (min-width: 970px) {\n        flex: 1 0 ', ';\n    }\n\n    @media only screen and (min-width: 1128px) {\n        flex: 1 0 23.837209%;\n        margin-right: ', '\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderWrapperAll = exports.SliderWrapperAll = _styledComponents2.default.div(_templateObject, function (props) {
    return props.display ? '#FFFFFF' : '#E7E8EA';
}, function (props) {
    return props.display ? 'background 500ms ease 1000ms' : 'none';
}, function (props) {
    return props.display ? '1' : '0';
});

var OverflowWrapperAll = exports.OverflowWrapperAll = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.display ? '400px' : '0';
}, function (props) {
    return props.display ? '1' : '0';
}, function (props) {
    return props.display ? '16px 0' : '0';
}, function (props) {
    return props.display ? 'max-height 1000ms ease-out, opacity 500ms ease 500ms' : 'none';
});

var SliderContainerAll = exports.SliderContainerAll = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.sliding ? 'transform 1s ease' : 'none';
}, function (props) {
    return 'translateX(calc(' + props.position + '*(' + (props.slotWidth ? '-' + props.slotWidth + '% - 12px' : '-43.918919% - 12px') + ')))';
}, function (props) {
    return 'translateX(calc(' + props.position + '*(' + (props.slotWidth ? '-' + props.slotWidth + '% - 16px' : '-46.336996% - 16px') + ')))';
}, function (props) {
    return 'translateX(calc(' + props.position + '*(' + (props.slotWidth ? '-' + props.slotWidth + '% - 16px' : '-30.694444% - 16px') + ')))';
}, function (props) {
    return 'translateX(calc(' + props.position + '*(' + (props.slotWidth ? '-' + props.slotWidth + '% - 16px' : '-23.044397% - 16px') + ')))';
}, function (props) {
    return 'translateX(calc(' + props.position + '*(-23.837209% - 16px)))';
});

var SliderSlotAll = exports.SliderSlotAll = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.slotWidth ? props.slotWidth + '%' : '43.918919%';
}, function (props) {
    return props.slotWidth ? props.slotWidth + '%' : '46.336996%';
}, function (props) {
    return props.slotWidth ? props.slotWidth + '%' : '30.694444%';
}, function (props) {
    return props.slotWidth ? props.slotWidth + '%' : '23.044397%';
}, function (props) {
    return props.slots === 1 ? '0' : '16px';
});