'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterButtons = require('./styled-components/FilterButtons');

var _Filters = require('./styled-components/Filters');

var _Minimal_Down = require('overstock-component-library/lib/Icons/arrows/Minimal_Down');

var _Minimal_Down2 = _interopRequireDefault(_Minimal_Down);

var _Check_Thin = require('overstock-component-library/lib/Icons/action/Check_Thin');

var _Check_Thin2 = _interopRequireDefault(_Check_Thin);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButtons = function (_Component) {
    _inherits(FilterButtons, _Component);

    function FilterButtons(props) {
        _classCallCheck(this, FilterButtons);

        var _this = _possibleConstructorReturn(this, (FilterButtons.__proto__ || Object.getPrototypeOf(FilterButtons)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(FilterButtons, [{
        key: 'renderRoomFilter',
        value: function renderRoomFilter() {
            var _this2 = this;

            var rooms = _utils.filterData.rooms.slice();

            var modifiedRooms = rooms.splice(rooms.indexOf(this.props.selectedRoom), 1).concat(rooms);
            return modifiedRooms.map(function (e, i, arr) {
                var selected = e === _this2.props.selectedRoom;

                return _react2.default.createElement(
                    _Filters.FilterOptionContainer,
                    { key: e, className: 'filter-option-container', onClick: _this2.props.selectRoom.bind(_this2, e) },
                    _react2.default.createElement(
                        _Filters.FilterOptionWrapper,
                        { className: 'filter-option-wrapper' },
                        _react2.default.createElement(
                            _Filters.CheckWrapper,
                            { className: 'check-wrapper', visible: selected },
                            _react2.default.createElement(_Check_Thin2.default, { className: 'checkmark', fill: '#545658', height: '100%', width: '100%' })
                        ),
                        _react2.default.createElement(
                            _Filters.FilterOptionText,
                            { key: e, className: 'filter-option-text', bold: selected },
                            e
                        )
                    )
                );
            });
        }
    }, {
        key: 'renderStyleFilter',
        value: function renderStyleFilter() {
            return _react2.default.createElement(_Filters.StyleFilterContainer, null);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _FilterButtons.FilterButtonWrapper,
                { className: 'filter-button-wrapper' },
                _react2.default.createElement(
                    _FilterButtons.FilterButton,
                    { className: 'filter-button' },
                    _react2.default.createElement(
                        _FilterButtons.FilterButtonInnerWrapper,
                        { className: 'filter-button-inner-wrapper', onClick: function onClick() {
                                return _this3.props.toggleMenu("roomMenu");
                            } },
                        _react2.default.createElement(
                            _FilterButtons.FilterButtonInnerCont,
                            { className: 'filter-button-inner-cont' },
                            _react2.default.createElement(
                                _FilterButtons.FilterButtonText,
                                { className: 'filter-button-text' },
                                this.props.selectedRoom ? this.props.selectedRoom : 'Room'
                            ),
                            _react2.default.createElement(
                                _FilterButtons.FilterButtonArrow,
                                { className: 'filter-button-arrow', open: this.props.roomMenu },
                                _react2.default.createElement(_Minimal_Down2.default, { className: 'downArrow', style: { width: '13px' }, color: '#545658' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _FilterButtons.RoomDropDown,
                        { className: 'room-menu', open: this.props.roomMenu },
                        _react2.default.createElement(
                            _Filters.FilterWrapper,
                            { className: 'filter-wrapper' },
                            this.renderRoomFilter()
                        )
                    )
                )
            );
        }
    }]);

    return FilterButtons;
}(_react.Component);

exports.default = FilterButtons;