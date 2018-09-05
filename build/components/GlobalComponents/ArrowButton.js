'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Minimal_Right = require('overstock-component-library/lib/svg-icons/arrows/Minimal_Right');

var _Minimal_Right2 = _interopRequireDefault(_Minimal_Right);

var _Minimal_Left = require('overstock-component-library/lib/svg-icons/arrows/Minimal_Left');

var _Minimal_Left2 = _interopRequireDefault(_Minimal_Left);

var _ArrowButton = require('./styled-components/ArrowButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowButton = function ArrowButton(props) {
    var renderSVG = function renderSVG() {
        if (props.right) return _react2.default.createElement(_Minimal_Right2.default, { color: '#666', height: '20', width: '20' });else return _react2.default.createElement(_Minimal_Left2.default, { color: '#666', height: '20', width: '20' });
    };
    return _react2.default.createElement(
        _ArrowButton.ArrowContainer,
        {
            bump30: props.bump30,
            right: props.right,
            position: props.position,
            images: props.images,
            onClick: function onClick() {
                return props.onClick();
            }
        },
        renderSVG()
    );
};

exports.default = ArrowButton;