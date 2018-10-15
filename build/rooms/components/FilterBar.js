'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterBar = require('./styled-components/FilterBar');

var _Minimal_Left = require('overstock-component-library/lib/Icons/arrows/Minimal_Left');

var _Minimal_Left2 = _interopRequireDefault(_Minimal_Left);

var _FilterButtons = require('./FilterButtons');

var _FilterButtons2 = _interopRequireDefault(_FilterButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterBar = function (_Component) {
    _inherits(FilterBar, _Component);

    function FilterBar(props) {
        _classCallCheck(this, FilterBar);

        var _this = _possibleConstructorReturn(this, (FilterBar.__proto__ || Object.getPrototypeOf(FilterBar)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(FilterBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _FilterBar.FilterBarWrapper,
                { className: 'filter-bar-wrapper' },
                _react2.default.createElement(
                    _FilterBar.TextWrapper,
                    { className: 'text-wrapper' },
                    _react2.default.createElement(
                        _FilterBar.ArrowWrapper,
                        { className: 'arrow-wrapper' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(_Minimal_Left2.default, { className: 'leftArrow', style: { height: '13px' }, color: '#545658' })
                        ),
                        _react2.default.createElement(
                            _FilterBar.RoomIdeasText,
                            { className: 'room-ideas-text' },
                            'Room Ideas'
                        )
                    ),
                    _react2.default.createElement(
                        _FilterBar.MainText,
                        { className: 'main-text' },
                        'Room Ideas'
                    )
                ),
                _react2.default.createElement(_FilterButtons2.default, this.props),
                _react2.default.createElement(
                    _FilterBar.FixedFilterButton,
                    { onClick: function onClick() {
                            return _this2.props.toggleMenu('mobileMenu');
                        }, className: 'fixed-filter-button' },
                    'Filters'
                )
            );
        }
    }]);

    return FilterBar;
}(_react.Component);

exports.default = FilterBar;