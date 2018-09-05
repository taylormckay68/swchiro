'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
    modsData: [],
    isAddingToCart: false,
    isFetching: false,
    error: null,
    seen: new Set(),
    clicked: new Set()
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types2.default.REQUEST_MODS_DATA:
            return _extends({}, state, {
                isFetchingMods: action.isFetchingMods
            });
        case _types2.default.REQUEST_MODS_DATA_FAILURE:
            return _extends({}, state, {
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            });
        case _types2.default.RECEIVE_MODS_DATA:
            return _extends({}, state, {
                modsData: action.modsData,
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            });
        case _types2.default.REQUEST_ADD_TO_CART:
            return _extends({}, state, {
                isAddingToCart: action.isAddingToCart
            });
        case _types2.default.ADD_TO_CLICKED:
            return _extends({}, state, {
                clicked: new Set([].concat(_toConsumableArray(state.clicked), _toConsumableArray(new Set([action.item]))))
            });
        case _types2.default.ADD_TO_SEEN:
            return _extends({}, state, {
                seen: new Set([].concat(_toConsumableArray(state.seen), _toConsumableArray(new Set([action.item]))))
            });
        default:
            return state;
    }
};