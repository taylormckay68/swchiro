'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MobileFilter = require('./styled-components/MobileFilter');

var _utils = require('../utils');

var _Check_Thin = require('overstock-component-library/lib/Icons/action/Check_Thin');

var _Check_Thin2 = _interopRequireDefault(_Check_Thin);

var _Close_Thin = require('overstock-component-library/lib/Icons/action/Close_Thin');

var _Close_Thin2 = _interopRequireDefault(_Close_Thin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileFilter = function (_Component) {
    _inherits(MobileFilter, _Component);

    function MobileFilter(props) {
        _classCallCheck(this, MobileFilter);

        var _this = _possibleConstructorReturn(this, (MobileFilter.__proto__ || Object.getPrototypeOf(MobileFilter)).call(this, props));

        _this.state = {
            pending: ''
        };
        return _this;
    }

    _createClass(MobileFilter, [{
        key: 'handleRoomSelect',
        value: function handleRoomSelect(room) {
            this.setState({ pending: room });
        }
    }, {
        key: 'applyResults',
        value: function applyResults() {
            this.state.pending !== this.props.selectedRoom && this.props.selectRoom(this.state.pending);
            this.props.toggleMenu('mobileMenu');
            this.setState({ pending: '' });
        }
    }, {
        key: 'clearFilters',
        value: function clearFilters() {
            this.setState({ pending: '' });
            this.props.selectRoom('');
        }
    }, {
        key: 'renderRoomsFilters',
        value: function renderRoomsFilters() {
            var _this2 = this;

            var rooms = _utils.filterData.rooms;

            return _react2.default.createElement(
                _MobileFilter.RoomsFilterContainer,
                { className: 'rooms-filter-container' },
                _react2.default.createElement(
                    _MobileFilter.RoomsFilterWrapper,
                    { className: 'rooms-filter-wrapper' },
                    _react2.default.createElement(
                        _MobileFilter.RoomsFilterLabel,
                        { className: 'rooms-filter-label' },
                        'Rooms'
                    ),
                    rooms.map(function (e) {
                        var selected = _this2.state.pending ? e === _this2.state.pending : e === _this2.props.selectedRoom;
                        return _react2.default.createElement(
                            _MobileFilter.RoomsFilterOptionsCont,
                            { key: e, className: 'rooms-filter-opt-cont', onClick: _this2.handleRoomSelect.bind(_this2, e) },
                            _react2.default.createElement(
                                _MobileFilter.MobCheckWrapper,
                                { className: 'mob-check-wrapper', visible: selected },
                                _react2.default.createElement(_Check_Thin2.default, { className: 'mob-checkmark', fill: '#545658', height: '100%', width: '100%' })
                            ),
                            _react2.default.createElement(
                                _MobileFilter.MobFilterOptionText,
                                { className: 'mob-filter-option-text', bold: selected },
                                e
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _MobileFilter.MobFilterWrapper,
                { className: 'mob-filter-wrapper', visible: this.props.visible },
                _react2.default.createElement(
                    _MobileFilter.MobFilterHeader,
                    { className: 'mob-filter-header' },
                    _react2.default.createElement(
                        _MobileFilter.HeaderTextWrapper,
                        { className: 'header-text-wrapper' },
                        _react2.default.createElement(
                            _MobileFilter.HeaderText,
                            null,
                            'Filters'
                        ),
                        _react2.default.createElement(
                            _MobileFilter.HeaderClear,
                            { className: 'mob-header-clear', onClick: function onClick() {
                                    return _this3.clearFilters();
                                } },
                            'Clear'
                        )
                    )
                ),
                this.renderRoomsFilters(),
                _react2.default.createElement(
                    _MobileFilter.MobFilterFooter,
                    { className: 'mob-filter-footer' },
                    _react2.default.createElement(
                        _MobileFilter.CloseButtonWrapper,
                        { className: 'close-button-wrapper', onClick: function onClick() {
                                return _this3.props.toggleMenu('mobileMenu');
                            } },
                        _react2.default.createElement(_Close_Thin2.default, { className: 'close-logo', height: '16px', fill: '#545658' }),
                        _react2.default.createElement(
                            _MobileFilter.CloseButtonText,
                            { className: 'close-button-text' },
                            'Close'
                        )
                    ),
                    _react2.default.createElement(
                        _MobileFilter.ResultsButton,
                        { onClick: function onClick() {
                                return _this3.applyResults();
                            } },
                        'Show Results'
                    )
                )
            );
        }
    }]);

    return MobileFilter;
}(_react.Component);

exports.default = MobileFilter;