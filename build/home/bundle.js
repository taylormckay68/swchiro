'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Provider } from 'react-redux'
// import configureStore from './components/redux/store'

// let preloadedState = window.__LPO__ ? window.__LPO__ : {}
// let updatedState = {
//   modsData: preloadedState.data,
//   roomsID: preloadedState.room,
//   nextRoomsData: preloadedState.nextData,
//   isFetching: false,
//   isFetchingNext: false,
//   error: null,
//   selectedRoom: preloadedState.room,
//   style: preloadedState.style
// }
// const store = configureStore(updatedState)

var main = document.getElementById('userActiveRooms');
if (main && window) (0, _reactDom.hydrate)(_react2.default.createElement(_Main2.default, { data: window.__DATA__ }), document.getElementById('userActiveRooms'));