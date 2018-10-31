'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    align-items: center;\n    background: #f0f1f2;\n    display: flex;\n    justify-content: center;\n'], ['\n    align-items: center;\n    background: #f0f1f2;\n    display: flex;\n    justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 0;\n    position: relative;\n'], ['\n    font-size: 0;\n    position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    max-height: 50vh;\n    max-width: 100%;\n\n    @media(max-width: 569px) {\n        max-width: 100vh;\n    }\n'], ['\n    max-height: 50vh;\n    max-width: 100%;\n\n    @media(max-width: 569px) {\n        max-width: 100vh;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Location = require('./Location');

var _Location2 = _interopRequireDefault(_Location);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_Component) {
    _inherits(Hero, _Component);

    function Hero() {
        _classCallCheck(this, Hero);

        var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this));

        _this.ImageRef = (0, _react.createRef)();
        return _this;
    }

    _createClass(Hero, [{
        key: 'render',
        value: function render() {
            var props = this.props,
                ImageRef = this.ImageRef;
            var data = props.data,
                products = props.products,
                updateLocation = props.updateLocation,
                visible = props.visible;


            if (!data || !Object.keys(data).length) return _react2.default.createElement('div', null);

            var imageUrl = data.media.extraLarge.link,
                curalateProducts = data.products;

            var imageWidth = ImageRef.current ? ImageRef.current.clientWidth : 0;

            return _react2.default.createElement(
                Wrapper,
                null,
                _react2.default.createElement(
                    InnerWrapper,
                    null,
                    _react2.default.createElement(Image, { innerRef: ImageRef, imageurl: imageUrl }),
                    curalateProducts.map(function (cProduct, idx) {
                        var product = products.find(function (oProduct) {
                            return oProduct.attributes.featuredProductId.toString() === cProduct.metadata.productId.toString();
                        }) || products[idx];
                        var coords = cProduct.spatialTag;


                        if (!product) return '';
                        return _react2.default.createElement(
                            _react.Fragment,
                            { key: idx },
                            _react2.default.createElement(_Location2.default, {
                                coords: coords,
                                key: idx,
                                id: idx,
                                product: product,
                                updateLocation: updateLocation
                            }),
                            _react2.default.createElement(_Popup2.default, { coords: coords, imageWidth: imageWidth, product: product, visible: visible === idx })
                        );
                    })
                )
            );
        }
    }]);

    return Hero;
}(_react.Component);

exports.default = Hero;


var Wrapper = _styledComponents2.default.div(_templateObject);

var InnerWrapper = _styledComponents2.default.div(_templateObject2);

var Image = _styledComponents2.default.img.attrs({
    src: function src(props) {
        return props.imageurl;
    }
})(_templateObject3);