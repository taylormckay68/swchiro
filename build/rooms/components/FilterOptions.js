'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _Check_Thin = require('overstock-component-library/lib/Icons/action/Check_Thin');

var _Check_Thin2 = _interopRequireDefault(_Check_Thin);

var _Filters = require('./styled-components/Filters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var selectRoom = _ref.selectRoom,
      selectedRoom = _ref.selectedRoom,
      selectedStyles = _ref.selectedStyles,
      toggleStyle = _ref.toggleStyle,
      type = _ref.type;

  var rooms = _utils.filterData.rooms.slice();
  var styles = _utils.filterData.styles['all-rooms'];
  var index = rooms.indexOf(selectedRoom);
  var modifiedRooms = index !== -1 ? rooms.splice(rooms.indexOf(selectedRoom), 1).concat(rooms) : rooms;

  return (type === 'room' ? modifiedRooms : styles).map(function (e, i) {
    var selected = type === 'room' ? e === selectedRoom : selectedStyles.indexOf(e) !== -1;
    var modifiedRoom = selectedRoom ? selectedRoom.toLowerCase().replace(' ', '-') : '';
    var grayStyle = modifiedRoom && type === 'style' ? _utils.filterData.styles[modifiedRoom].indexOf(e) === -1 : false;
    return _react2.default.createElement(
      _Filters.FilterOptionContainer,
      {
        key: e,
        className: 'filter-option-container',
        onClick: type === 'room' ? selectRoom.bind(undefined, e) : !grayStyle ? function () {
          return toggleStyle(e);
        } : ''
      },
      _react2.default.createElement(
        _Filters.FilterOptionWrapper,
        {
          className: 'filter-option-wrapper',
          grayStyle: grayStyle
        },
        type === 'room' ? _react2.default.createElement(
          _Filters.CheckWrapper,
          { className: 'check-wrapper', visible: selected },
          _react2.default.createElement(_Check_Thin2.default, {
            className: 'checkmark',
            fill: '#545658',
            height: '100%',
            width: '100%'
          })
        ) : _react2.default.createElement(
          _Filters.CheckContainer,
          { className: 'check-container' },
          _react2.default.createElement(
            _Filters.CheckWrapper,
            { className: 'check-wrapper', visible: selected },
            _react2.default.createElement(_Check_Thin2.default, {
              className: 'checkmark',
              fill: '#545658',
              height: '100%',
              width: '100%'
            })
          )
        ),
        _react2.default.createElement(
          _Filters.FilterOptionText,
          {
            key: e,
            className: 'filter-option-text',
            bold: selected,
            grayStyle: grayStyle
          },
          e
        )
      )
    );
  });
};