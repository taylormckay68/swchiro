'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MobileFilter = require('./styled-components/MobileFilter');

var _Close_Thin = require('overstock-component-library/lib/Icons/action/Close_Thin');

var _Close_Thin2 = _interopRequireDefault(_Close_Thin);

var _utils = require('../utils');

var _MobileOptions = require('./MobileOptions');

var _MobileOptions2 = _interopRequireDefault(_MobileOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileFilter = function (_Component) {
  _inherits(MobileFilter, _Component);

  function MobileFilter(props) {
    _classCallCheck(this, MobileFilter);

    var _this = _possibleConstructorReturn(this, (MobileFilter.__proto__ || Object.getPrototypeOf(MobileFilter)).call(this, props));

    _this.applyResults = function () {
      _this.props.selectFilter(_this.state.pending, _this.state.selectedStyles);
      _this.props.toggleMenu('mobileMenu');
      _this.setState({
        clearedRoom: ''
      });
    };

    _this.clearFilters = function () {
      _this.setState({
        pending: '',
        clearedRoom: _this.props.selectedRoom,
        selectedStyles: []
      });
    };

    _this.handleRoomSelect = function (room) {
      _this.setState(function (state) {
        return {
          pending: state.pending !== room ? room : '',
          clearedRoom: ''
        };
      });
    };

    _this.handleStyleSelect = function (style) {
      _this.setState(function (state) {
        var ss = state.selectedStyles;

        var index = ss.indexOf(style);

        return {
          selectedStyles: index !== -1 ? ss.slice(0, index).concat(ss.slice(index + 1)) : [].concat(_toConsumableArray(ss), [style])
        };
      });
    };

    _this.toggleMore = function (key) {
      return _this.setState(function (state) {
        return _defineProperty({}, key, !state[key]);
      });
    };

    _this.resetClearedRoom = function () {
      _this.setState({
        clearedRoom: '',
        pending: _this.props.selectedRoom,
        selectedStyles: _this.props.selectedStyles
      });
      _this.props.toggleMenu('mobileMenu');
      _this.setState({ clearedRoom: '', pending: _this.props.selectedRoom });
    };

    _this.state = {
      clearedRoom: '',
      pending: props.selectedRoom || '',
      selectedStyles: props.selectedStyles || [],
      showMoreRooms: false,
      showMoreStyles: false
    };
    return _this;
  }

  _createClass(MobileFilter, [{
    key: 'render',
    value: function render() {
      var rooms = _utils.filterData.rooms.slice();
      var applyResults = this.applyResults,
          clearFilters = this.clearFilters,
          handleRoomSelect = this.handleRoomSelect,
          handleStyleSelect = this.handleStyleSelect,
          _props = this.props,
          selectedRoom = _props.selectedRoom,
          visible = _props.visible,
          resetClearedRoom = this.resetClearedRoom,
          _state = this.state,
          pending = _state.pending,
          selectedStyles = _state.selectedStyles,
          showMoreRooms = _state.showMoreRooms,
          showMoreStyles = _state.showMoreStyles,
          toggleMore = this.toggleMore;

      var index = rooms.indexOf(selectedRoom);
      var modifiedRooms = index !== -1 ? rooms.splice(rooms.indexOf(selectedRoom), 1).concat(rooms) : rooms;
      var styles = _utils.filterData.styles['all-rooms'];
      return _react2.default.createElement(
        _MobileFilter.MobFilterWrapper,
        { className: 'mob-filter-wrapper', visible: visible },
        _react2.default.createElement(
          _MobileFilter.MobileInnerWrapper,
          null,
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
                {
                  className: 'mob-header-clear',
                  onClick: function onClick() {
                    return clearFilters();
                  }
                },
                'Clear'
              )
            )
          ),
          _react2.default.createElement(_MobileOptions2.default, {
            arr: modifiedRooms,
            selected: pending,
            selectFunction: handleRoomSelect,
            showAll: showMoreRooms,
            toggleMore: toggleMore,
            type: 'Rooms'
          }),
          _react2.default.createElement(_MobileOptions2.default, {
            arr: styles,
            selected: selectedStyles,
            selectFunction: handleStyleSelect,
            showAll: showMoreStyles,
            toggleMore: toggleMore,
            room: pending,
            type: 'Styles'
          })
        ),
        _react2.default.createElement(
          _MobileFilter.MobFilterFooter,
          { className: 'mob-filter-footer' },
          _react2.default.createElement(
            _MobileFilter.CloseButtonWrapper,
            {
              className: 'close-button-wrapper',
              onClick: resetClearedRoom
            },
            _react2.default.createElement(_Close_Thin2.default, {
              className: 'close-logo',
              height: '16px',
              fill: '#545658'
            }),
            _react2.default.createElement(
              _MobileFilter.CloseButtonText,
              { className: 'close-button-text' },
              'Close'
            )
          ),
          _react2.default.createElement(
            _MobileFilter.ResultsButton,
            {
              className: 'results-button',
              onClick: function onClick() {
                return applyResults();
              }
            },
            'Show Results'
          )
        )
      );
    }
  }]);

  return MobileFilter;
}(_react.Component);

exports.default = MobileFilter;