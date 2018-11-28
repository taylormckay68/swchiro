'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FilterButtons = require('./styled-components/FilterButtons');

var _Filters = require('./styled-components/Filters');

var _FilterOptions = require('./FilterOptions');

var _FilterOptions2 = _interopRequireDefault(_FilterOptions);

var _InnerButton = require('./InnerButton');

var _InnerButton2 = _interopRequireDefault(_InnerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButtons = function (_Component) {
  _inherits(FilterButtons, _Component);

  function FilterButtons(props) {
    _classCallCheck(this, FilterButtons);

    var _this = _possibleConstructorReturn(this, (FilterButtons.__proto__ || Object.getPrototypeOf(FilterButtons)).call(this, props));

    _this.toggleStyle = function (style) {
      _this.setState(function (state) {
        var ss = state.selectedStyles;

        var index = ss.indexOf(style);
        var modifiedStyles = index !== -1 ? ss.slice(0, index).concat(ss.slice(index + 1)) : [style].concat(_toConsumableArray(ss));

        return {
          selectedStyles: modifiedStyles
        };
      });
    };

    _this.applySelections = function () {
      _this.props.setStyles(_this.state.selectedStyles);
      _this.props.toggleMenu('styleMenu');
    };

    _this.clearSelections = function () {
      return _this.setState({ selectedStyles: [] });
    };

    _this.state = {
      selectedStyles: props.selectedStyles || []
    };
    return _this;
  }

  _createClass(FilterButtons, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      if (next.styleMenu !== this.props.styleMenu) this.setState({ selectedStyles: next.selectedStyles });
    }
  }, {
    key: 'render',
    value: function render() {
      var applySelections = this.applySelections,
          clearSelections = this.clearSelections,
          _props = this.props,
          roomMenu = _props.roomMenu,
          selectedRoom = _props.selectedRoom,
          selectRoom = _props.selectRoom,
          styleMenu = _props.styleMenu,
          toggleMenu = _props.toggleMenu,
          selectedStyles = this.state.selectedStyles,
          toggleStyle = this.toggleStyle;


      return _react2.default.createElement(
        _FilterButtons.FilterButtonWrapper,
        { className: 'filter-button-wrapper' },
        _react2.default.createElement(
          _FilterButtons.FilterButton,
          { className: 'filter-button' },
          _react2.default.createElement(_InnerButton2.default, {
            roomMenu: roomMenu,
            selectedRoom: selectedRoom,
            selectedStyles: this.props.selectedStyles,
            styleMenu: styleMenu,
            toggleMenu: toggleMenu,
            type: 'room'
          }),
          _react2.default.createElement(
            _FilterButtons.RoomDropdown,
            { className: 'room-menu', open: this.props.roomMenu },
            _react2.default.createElement(
              _Filters.RoomFilterWrapper,
              { className: 'filter-wrapper' },
              _react2.default.createElement(_FilterOptions2.default, {
                selectRoom: selectRoom,
                selectedStyles: selectedStyles,
                selectedRoom: selectedRoom,
                type: 'room'
              })
            )
          )
        ),
        _react2.default.createElement(
          _FilterButtons.FilterButton,
          { className: 'filter-button' },
          _react2.default.createElement(_InnerButton2.default, {
            roomMenu: roomMenu,
            selectedRoom: selectedRoom,
            selectedStyles: this.props.selectedStyles,
            styleMenu: styleMenu,
            toggleMenu: toggleMenu,
            type: 'style'
          }),
          _react2.default.createElement(
            _FilterButtons.StyleDropdown,
            {
              onClick: function onClick(e) {
                return e.preventDefault();
              },
              className: 'style-menu',
              open: this.props.styleMenu
            },
            _react2.default.createElement(
              _Filters.StyleFilterWrapper,
              null,
              _react2.default.createElement(
                _Filters.StyleFilterContainer,
                null,
                _react2.default.createElement(_FilterOptions2.default, {
                  selectRoom: selectRoom,
                  selectedStyles: selectedStyles,
                  selectedRoom: selectedRoom,
                  toggleStyle: toggleStyle,
                  type: 'style'
                })
              ),
              _react2.default.createElement(
                _Filters.StyleButtonWrapper,
                { className: 'style-button-wrapper' },
                _react2.default.createElement(
                  _Filters.ClearButton,
                  { className: 'clear-button', onClick: clearSelections },
                  'Clear'
                ),
                _react2.default.createElement(
                  _Filters.ApplyButton,
                  { className: 'apply-button', onClick: applySelections },
                  'Apply'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FilterButtons;
}(_react.Component);

exports.default = FilterButtons;