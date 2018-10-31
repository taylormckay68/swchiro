'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    align-items: center;\n    background: #fff;\n    border-radius: 4px;\n    display: ', ';\n    flex: 1;\n    margin: 0 ', 'px 0 ', 'px; \n    max-width: 90vw;\n    padding: 5px;\n    position: absolute;\n    top: ', ';\n    bottom: ', ';\n    right: ', ';\n    left: ', ';\n    width: 240px;\n    z-index: 2;\n'], ['\n    align-items: center;\n    background: #fff;\n    border-radius: 4px;\n    display: ', ';\n    flex: 1;\n    margin: 0 ', 'px 0 ', 'px; \n    max-width: 90vw;\n    padding: 5px;\n    position: absolute;\n    top: ', ';\n    bottom: ', ';\n    right: ', ';\n    left: ', ';\n    width: 240px;\n    z-index: 2;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex: 1;\n    width: 55px;\n'], ['\n    flex: 1;\n    width: 55px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Info = require('./Info');

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
    var coords = _ref.coords,
        imageWidth = _ref.imageWidth,
        product = _ref.product,
        visible = _ref.visible;
    var imageUrl = product.asset.imageUrl;

    var distance = imageWidth * Math.min(coords.x, 1 - coords.x);
    var popupWidth = 240;
    var marginX = distance - Math.max(distance - (imageWidth - popupWidth), 0) - 20;

    return _react2.default.createElement(
        PopupWrapper,
        { marginX: marginX, onClick: function onClick(event) {
                return event.stopPropagation();
            }, coords: coords, visible: visible },
        _react2.default.createElement(Image, { imageurl: imageUrl }),
        _react2.default.createElement(_Info2.default, { product: product })
    );
};

var PopupWrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return props.visible ? 'flex' : 'none';
}, function (props) {
    return props.coords.x >= .5 ? 0 : props.marginX;
}, function (props) {
    return props.coords.x >= .5 ? props.marginX : 0;
}, function (props) {
    return props.coords.y >= .5 ? 'initial' : props.coords.y * 100 + '%';
}, function (props) {
    return props.coords.y >= .5 ? (1 - props.coords.y) * 100 + '%' : 'initial';
}, function (props) {
    return props.coords.x >= .5 ? props.marginX + 'px' : 'initial';
}, function (props) {
    return props.coords.x >= .5 ? 'initial' : props.marginX + 'px';
});

var Image = _styledComponents2.default.img.attrs({
    src: function src(props) {
        return props.imageurl;
    }
})(_templateObject2);