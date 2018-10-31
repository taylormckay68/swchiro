'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

var _reactRedux = require('react-redux');

var _rootReducer = require('./redux/rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _rootReducer2.default)();

var room = document.getElementById('userActiveRoom');
if (room && window) (0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Main2.default, { data: window.__LPO__ })
), document.getElementById('userActiveRoom'));