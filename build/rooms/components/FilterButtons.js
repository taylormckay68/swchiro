'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterButtons = require('./styled-components/FilterButtons');

var _Minimal_Down = require('overstock-component-library/lib/Icons/arrows/Minimal_Down');

var _Minimal_Down2 = _interopRequireDefault(_Minimal_Down);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButtons = function (_Component) {
    _inherits(FilterButtons, _Component);

    function FilterButtons(props) {
        _classCallCheck(this, FilterButtons);

        var _this = _possibleConstructorReturn(this, (FilterButtons.__proto__ || Object.getPrototypeOf(FilterButtons)).call(this, props));

        _this.state = {
            roomMenu: false,
            styleMenu: false,
            colorMenu: false
        };
        _this.clickRoomMenu = _this.clickRoomMenu.bind(_this);
        _this.blurRoomMenu = _this.blurRoomMenu.bind(_this);
        return _this;
    }

    _createClass(FilterButtons, [{
        key: 'blurRoomMenu',
        value: function blurRoomMenu() {
            console.log('blur');
            this.setState({
                roomMenu: false
            });
        }
    }, {
        key: 'clickRoomMenu',
        value: function clickRoomMenu(menu) {
            console.log('click');
            this.setState(_defineProperty({}, menu, !this.state[menu]));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _FilterButtons.FilterButtonWrapper,
                { className: 'filter-button-wrapper' },
                _react2.default.createElement(
                    _FilterButtons.FilterButton,
                    { className: 'filter-button', onClick: function onClick() {
                            return _this2.clickRoomMenu("roomMenu");
                        }, onBlur: this.blurRoomMenu },
                    _react2.default.createElement(
                        _FilterButtons.FilterButtonInnerCont,
                        { className: 'filter-button-inner-cont' },
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonText,
                            { className: 'filter-button-text' },
                            'Room'
                        ),
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonArrow,
                            { className: 'filter-button-arrow' },
                            _react2.default.createElement(_Minimal_Down2.default, { className: 'downArrow', style: { width: '13px' }, color: '#545658' })
                        )
                    ),
                    _react2.default.createElement(_FilterButtons.RoomDropDown, { className: 'drop-down-menu', open: this.state.roomMenu, onClick: function onClick(e) {
                            return e.preventDefault();
                        } })
                ),
                _react2.default.createElement(
                    _FilterButtons.FilterButton,
                    { className: 'filter-button', onClick: function onClick() {
                            return _this2.clickRoomMenu("styleMenu");
                        } },
                    _react2.default.createElement(
                        _FilterButtons.FilterButtonInnerCont,
                        { className: 'filter-button-inner-cont' },
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonText,
                            { className: 'filter-button-text' },
                            'Style'
                        ),
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonArrow,
                            { className: 'filter-button-arrow' },
                            _react2.default.createElement(_Minimal_Down2.default, { className: 'downArrow', style: { width: '13px' }, color: '#545658' })
                        )
                    ),
                    _react2.default.createElement(_FilterButtons.StyleDropDown, { className: 'drop-down-menu', open: this.state.styleMenu })
                ),
                _react2.default.createElement(
                    _FilterButtons.FilterButton,
                    { className: 'filter-button', onClick: function onClick() {
                            return _this2.clickRoomMenu("colorMenu");
                        } },
                    _react2.default.createElement(
                        _FilterButtons.FilterButtonInnerCont,
                        { className: 'filter-button-inner-cont' },
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonText,
                            { className: 'filter-button-text' },
                            'Color'
                        ),
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonArrow,
                            { className: 'filter-button-arrow' },
                            _react2.default.createElement(_Minimal_Down2.default, { className: 'downArrow', style: { width: '13px' }, color: '#545658' })
                        )
                    ),
                    _react2.default.createElement(_FilterButtons.ColorDropDown, { className: 'drop-down-menu', open: this.state.colorMenu })
                )
            );
        }
    }]);

    return FilterButtons;
}(_react.Component);

exports.default = FilterButtons;