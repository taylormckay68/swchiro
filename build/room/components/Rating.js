'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilledStarContainer = exports.Front = exports.StarContainer = exports.StarWrapper = exports.RatingWrapper = exports.Count = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    color: #258a9c;\n    font-size: 10px;\n    margin-left: 4px;\n'], ['\n    color: #258a9c;\n    font-size: 10px;\n    margin-left: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n'], ['\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 6px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    fill: #d6d6d6;\n    position: relative;\n    width: 60px;\n'], ['\n    fill: #d6d6d6;\n    position: relative;\n    width: 60px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    align-items: center;\n    direction: rtl;\n    display: flex;\n    fill: #bfbfbf;\n    justify-content: space-between;\n\n    svg {\n        transition: opacity linear .2s;\n        width: 100%;\n    }\n'], ['\n    align-items: center;\n    direction: rtl;\n    display: flex;\n    fill: #bfbfbf;\n    justify-content: space-between;\n\n    svg {\n        transition: opacity linear .2s;\n        width: 100%;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    overflow: hidden;\n    max-width: 100%;\n    position: absolute;\n    top: 0;\n    width: ', '%;\n'], ['\n    overflow: hidden;\n    max-width: 100%;\n    position: absolute;\n    top: 0;\n    width: ', '%;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    fill: #f39019;\n    width: 60px;\n'], ['\n    fill: #f39019;\n    width: 60px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Star_Full = require('overstock-component-library/lib/Icons/rate/Star_Full');

var _Star_Full2 = _interopRequireDefault(_Star_Full);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var renderStars = function renderStars() {
    return Array.from(Array(5).keys()).map(function (i) {
        return _react2.default.createElement(_Star_Full2.default, { key: i, 'data-index': i, viewBox: '0 0 30 30' });
    });
};

exports.default = function (_ref) {
    var count = _ref.count,
        rating = _ref.rating;
    return _react2.default.createElement(
        RatingWrapper,
        null,
        _react2.default.createElement(
            Count,
            null,
            count,
            ' reviews'
        ),
        _react2.default.createElement(
            StarWrapper,
            null,
            _react2.default.createElement(
                StarContainer,
                null,
                renderStars()
            ),
            _react2.default.createElement(
                Front,
                { rating: rating },
                _react2.default.createElement(
                    FilledStarContainer,
                    null,
                    renderStars()
                )
            )
        )
    );
};

var Count = exports.Count = _styledComponents2.default.span(_templateObject);

var RatingWrapper = exports.RatingWrapper = _styledComponents2.default.div(_templateObject2);

var StarWrapper = exports.StarWrapper = _styledComponents2.default.div(_templateObject3);

var StarContainer = exports.StarContainer = _styledComponents2.default.div(_templateObject4);

var Front = exports.Front = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.rating * (100 / 5) || 0;
});

var FilledStarContainer = exports.FilledStarContainer = StarContainer.extend(_templateObject6);