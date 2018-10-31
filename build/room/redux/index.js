'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProducts = exports.fetchSimilarRooms = exports.fetchMediaItem = undefined;

var _rootReducer = require('./rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fetchMediaItem = _actions.fetchMediaItem;
exports.fetchSimilarRooms = _actions.fetchSimilarRooms;
exports.fetchProducts = _actions.fetchProducts;
exports.default = _rootReducer2.default;