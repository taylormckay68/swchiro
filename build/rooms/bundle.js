'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _RoomIdeas = require('./components/RoomIdeas');

var _RoomIdeas2 = _interopRequireDefault(_RoomIdeas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rooms = document.getElementById('userActiveRooms');
if (rooms && window) (0, _reactDom.hydrate)(_react2.default.createElement(_RoomIdeas2.default, { data: window.__LPO__ }), document.getElementById('userActiveRooms'));