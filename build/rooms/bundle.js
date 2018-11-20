'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _RoomIdeas = require('./components/RoomIdeas');

var _RoomIdeas2 = _interopRequireDefault(_RoomIdeas);

var _reactRedux = require('react-redux');

var _store = require('./components/redux/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloadedState = window.__LPO__ ? window.__LPO__ : {};
var updatedState = {
    modsData: preloadedState.data,
    roomsID: preloadedState.room,
    nextRoomsData: preloadedState.nextData,
    isFetching: false,
    isFetchingNext: false,
    error: null,
    selectedRoom: preloadedState.room
};
var store = (0, _store2.default)(updatedState);

var rooms = document.getElementById('userActiveRooms');
if (rooms && window) (0, _reactDom.hydrate)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_RoomIdeas2.default, { data: window.__LPO__ })
), document.getElementById('userActiveRooms'));