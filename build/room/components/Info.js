'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    padding-left:10px;\n'], ['\n    display: flex;\n    flex-direction: column;\n    padding-left:10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 12px;\n    margin-left: 10px;\n    text-decoration: line-through;\n'], ['\n    font-size: 12px;\n    margin-left: 10px;\n    text-decoration: line-through;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 14px;\n    font-weight: 700;\n'], ['\n    font-size: 14px;\n    font-weight: 700;\n']),
    _templateObject4 = _taggedTemplateLiteral([''], ['']),
    _templateObject5 = _taggedTemplateLiteral(['\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    display: -webkit-box;\n    font-size: 10px;\n    margin-top: 6px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n'], ['\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    display: -webkit-box;\n    font-size: 10px;\n    margin-top: 6px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
    var product = _ref.product;
    var _product$attributes$p = product.attributes.productData,
        options = _product$attributes$p.options,
        productName = _product$attributes$p.productName,
        reviewCount = _product$attributes$p.reviewCount,
        reviewRating = _product$attributes$p.reviewRating;
    var _options$ = options[0],
        savings = _options$.savings,
        sellingPrice = _options$.sellingPrice;

    var oldPrice = Number(savings.slice(1)) + Number(sellingPrice.slice(1));

    return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                Price,
                null,
                sellingPrice
            ),
            _react2.default.createElement(
                OldPrice,
                null,
                isNaN(oldPrice) ? '' : '$' + oldPrice
            )
        ),
        _react2.default.createElement(
            Name,
            null,
            productName
        ),
        _react2.default.createElement(_Rating2.default, { count: reviewCount, rating: reviewRating })
    );
};

var Wrapper = _styledComponents2.default.div(_templateObject);

var OldPrice = _styledComponents2.default.span(_templateObject2);

var Price = _styledComponents2.default.span(_templateObject3);

var PriceWrapper = _styledComponents2.default.div(_templateObject4);

var Name = _styledComponents2.default.span(_templateObject5);