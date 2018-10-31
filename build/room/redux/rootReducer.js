'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
    mediaItem: {},
    isFetching: false,
    error: null
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types2.default.REQUEST_MEDIA_ITEM:
            return _extends({}, state, {
                isFetchingItem: action.isFetchingItem
            });
        case _types2.default.REQUEST_MEDIA_ITEM_FAILURE:
            return _extends({}, state, {
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            });
        case _types2.default.RECEIVE_MEDIA_ITEM:
            return _extends({}, state, {
                mediaItem: action.mediaItem,
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            });
        case _types2.default.REQUEST_SIMILAR_ROOMS:
            return _extends({}, state, {
                isFetchingItem: action.isFetchingItem
            });
        case _types2.default.REQUEST_SIMILAR_ROOMS_FAILURE:
            return _extends({}, state, {
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            });
        case _types2.default.RECEIVE_SIMILAR_ROOMS:
            return _extends({}, state, {
                similarRooms: action.similarRooms,
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            });
        case _types2.default.REQUEST_PRODUCTS:
            return _extends({}, state, {
                isFetchingProduct: action.isFetchingProduct
            });
        case _types2.default.REQUEST_PRODUCTS_FAILURE:
            return _extends({}, state, {
                isFetchingProduct: action.isFetchingProduct,
                errorProduct: action.errorProduct
            });
        case _types2.default.RECEIVE_PRODUCTS:
            return _extends({}, state, {
                products: action.products,
                isFetchingProduct: action.isFetchingProduct,
                errorProduct: action.errorProduct
            });
        default:
            return state;
    }
};