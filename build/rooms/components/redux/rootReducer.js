'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _types2.default.TEST:
            return _extends({}, state, {
                test1: action.test1
            });
        case _types2.default.REQUEST_MODS_DATA:
            return _extends({}, state, {
                isFetching: action.isFetching
            });
        case _types2.default.RECEIVE_MODS_DATA:
            return _extends({}, state, {
                modsData: action.modsData,
                isFetching: action.isFetching,
                errorMods: action.error,
                nextRoomsData: action.nextRoomsData
            });
        case _types2.default.REQUEST_NEXT_MODS_DATA:
            return _extends({}, state, {
                isFetchingNext: action.isFetching
            });
        case _types2.default.RECEIVE_NEXT_MODS_DATA:
            return _extends({}, state, {
                modsData: [].concat(_toConsumableArray(state.modsData), _toConsumableArray(action.modsData)),
                isFetchingNext: action.isFetching,
                errorMods: action.error,
                nextRoomsData: action.nextRoomsData
            });
        default:
            return state;
    }
};