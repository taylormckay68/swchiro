'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledSlide = exports.Options = exports.InnerWrapper = exports.Image = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    max-width: 100vw;\n    overflow: hidden;\n    padding-bottom: 16px;\n'], ['\n    max-width: 100vw;\n    overflow: hidden;\n    padding-bottom: 16px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n'], ['\n    width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background: url(', ') top center no-repeat #f5f5f5;\n    background-size: cover;\n    border-radius: 8px;\n    mix-blend-mode: darken;\n    padding-top: 100%;\n    position: relative;\n    width: 100%;\n    height: 0;\n'], ['\n    background: url(', ') top center no-repeat #f5f5f5;\n    background-size: cover;\n    border-radius: 8px;\n    mix-blend-mode: darken;\n    padding-top: 100%;\n    position: relative;\n    width: 100%;\n    height: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    margin: 0 80px;\n    max-width: 1620px;\n\n    @media(max-width: 1127px) {\n        margin: 0 24px;\n    }\n    @media(min-width: 1780px) {\n        margin: auto;\n    }\n'], ['\n    margin: 0 80px;\n    max-width: 1620px;\n\n    @media(max-width: 1127px) {\n        margin: 0 24px;\n    }\n    @media(min-width: 1780px) {\n        margin: auto;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 15px;\n    margin: 8px 0 0;\n'], ['\n    font-size: 15px;\n    margin: 8px 0 0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    align-items: flex-start;\n    border-radius: 3px;\n    color: #525252;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0 ', 'px;\n    position: relative;\n    text-decoration: none;\n'], ['\n    align-items: flex-start;\n    border-radius: 3px;\n    color: #525252;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    margin: 0 ', 'px;\n    position: relative;\n    text-decoration: none;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    align-self: flex-start;\n    font-weight: 700;\n    font-size: 18px;\n    margin-top: 10px;\n\n    span {\n        font-size: 15px;\n        font-weight: 500;\n        text-decoration: line-through;\n    }\n'], ['\n    align-self: flex-start;\n    font-weight: 700;\n    font-size: 18px;\n    margin-top: 10px;\n\n    span {\n        font-size: 15px;\n        font-weight: 500;\n        text-decoration: line-through;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

var _CarouselMod = require('overstock-marketing-component-library/module/lib/js/CarouselMod');

var _CarouselMod2 = _interopRequireDefault(_CarouselMod);

var _Icons = require('./Icons');

var _Icons2 = _interopRequireDefault(_Icons);

var _Hero = require('./Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _SimilarRooms = require('./SimilarRooms');

var _SimilarRooms2 = _interopRequireDefault(_SimilarRooms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.renderSlide = function (slide, dimensions) {
            var _slide$asset = slide.asset,
                id = _slide$asset.id,
                imageUrl = _slide$asset.imageUrl,
                link = slide.landingPage,
                options = slide.attributes.productData.options;
            var _options$ = options[0],
                savings = _options$.savings,
                sellingPrice = _options$.sellingPrice;

            var oldPrice = savings && savings !== '$0.00' ? (Number(savings.slice(1).replace(/,/g, '')) + Number(sellingPrice.slice(1).replace(/,/g, ''))).toFixed(2) : null;

            return _react2.default.createElement(
                StyledSlide,
                { key: id, draggable: 'false', target: '_blank', href: link, innerMargin: dimensions.innerMargin },
                _react2.default.createElement(
                    ImageWrapper,
                    null,
                    _react2.default.createElement(Image, { image: imageUrl })
                ),
                _react2.default.createElement(
                    Price,
                    null,
                    sellingPrice,
                    ' ',
                    _react2.default.createElement(
                        'span',
                        null,
                        oldPrice ? '$' + Number(oldPrice).toLocaleString() : ''
                    )
                ),
                _react2.default.createElement(
                    Options,
                    null,
                    options.length,
                    ' option',
                    options.length !== 1 && 's'
                )
            );
        };

        _this.updateFeaturedRoom = function (asset) {
            var newHref = window.location.href.replace(_this.props.mediaItem.id, asset);
            window.location = newHref;
        };

        _this.updateLocation = function (id) {
            _this.setState({ activeLocation: id });
        };

        _this.state = {
            activeLocation: null
        };
        return _this;
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchMediaItem();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            var newMediaItem = Object.keys(next.mediaItem).length && !Object.keys(this.props.mediaItem).length;

            if (newMediaItem) {
                this.props.fetchSimilarRooms(next.mediaItem.labels);
                this.props.fetchProducts(next.mediaItem.products.map(function (prod) {
                    return prod.metadata.productId;
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                activeLocation = this.state.activeLocation,
                renderSlide = this.renderSlide,
                updateFeaturedRoom = this.updateFeaturedRoom,
                updateLocation = this.updateLocation;

            var mediaItem = props.mediaItem || props.data.mediaItem || {};
            var products = props.products || props.data.products || [];
            var similarRooms = props.similarRooms || props.data.similarRooms || [];

            return _react2.default.createElement(
                PageWrapper,
                { onClick: updateLocation },
                _react2.default.createElement(_Hero2.default, { visible: activeLocation, data: mediaItem, products: products, updateLocation: updateLocation }),
                _react2.default.createElement(_Icons2.default, null),
                _react2.default.createElement(
                    InnerWrapper,
                    null,
                    _react2.default.createElement(_CarouselMod2.default, { renderSlide: renderSlide, slides: products }),
                    _react2.default.createElement(_SimilarRooms2.default, { mediaItem: mediaItem, rooms: similarRooms, updateFeaturedRoom: updateFeaturedRoom })
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

var PageWrapper = _styledComponents2.default.div(_templateObject);

var ImageWrapper = _styledComponents2.default.div(_templateObject2);

var Image = exports.Image = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.image;
});

var InnerWrapper = exports.InnerWrapper = _styledComponents2.default.div(_templateObject4);

var Options = exports.Options = _styledComponents2.default.p(_templateObject5);

var StyledSlide = exports.StyledSlide = _styledComponents2.default.a(_templateObject6, function (props) {
    return props.innerMargin / 2;
});

var Price = _styledComponents2.default.span(_templateObject7);

var mapStateToProps = function mapStateToProps(state) {
    return {
        mediaItem: state.mediaItem,
        similarRooms: state.similarRooms,
        products: state.products,
        isFetching: state.isFetching,
        error: state.error,
        state: state
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchMediaItem: function fetchMediaItem() {
            return dispatch((0, _actions.fetchMediaItem)());
        },
        fetchSimilarRooms: function fetchSimilarRooms(items) {
            return dispatch((0, _actions.fetchSimilarRooms)(items));
        },
        fetchProducts: function fetchProducts(product_ids) {
            return dispatch((0, _actions.fetchProducts)(product_ids));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);