'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Minimal_Down = require('overstock-component-library/lib/Icons/arrows/Minimal_Down');

var _Minimal_Down2 = _interopRequireDefault(_Minimal_Down);

var _FilterButtons = require('./styled-components/FilterButtons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var roomMenu = _ref.roomMenu,
      selectedRoom = _ref.selectedRoom,
      styleMenu = _ref.styleMenu,
      toggleMenu = _ref.toggleMenu,
      type = _ref.type;
  return _react2.default.createElement(
    _FilterButtons.FilterButtonInnerWrapper,
    {
      className: 'filter-button-inner-wrapper',
      onClick: function onClick() {
        return toggleMenu(type === 'room' ? 'roomMenu' : 'styleMenu');
      }
    },
    _react2.default.createElement(
      _FilterButtons.FilterButtonInnerCont,
      { className: 'filter-button-inner-cont' },
      _react2.default.createElement(
        _FilterButtons.FilterButtonText,
        { className: 'filter-button-text' },
        type === 'room' ? selectedRoom ? selectedRoom : 'Room' : 'Style'
      ),
      _react2.default.createElement(
        _FilterButtons.FilterButtonArrow,
        {
          className: 'filter-button-arrow',
          open: type === 'room' ? roomMenu : styleMenu
        },
        _react2.default.createElement(_Minimal_Down2.default, {
          className: 'downArrow',
          style: { width: '13px' },
          color: '#545658'
        })
      )
    )
  );
};