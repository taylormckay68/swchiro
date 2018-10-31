"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchProducts = exports.fetchSimilarRooms = exports.fetchMediaItem = undefined;

var _templateObject = _taggedTemplateLiteral([""], [""]);

var _types = require("./types");

var _types2 = _interopRequireDefault(_types);

var _crossFetch = require("cross-fetch");

var _crossFetch2 = _interopRequireDefault(_crossFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getUrlQueries = function getUrlQueries() {
    if (window.location.href === 'undefined') return;
    var queriesObj = {};
    var queriesArray = window.location.href.split('?');
    queriesArray.shift();
    queriesArray = queriesArray.join(_templateObject).split('&');

    queriesArray.map(function (i) {
        return queriesObj[i.split('=')[0]] = i.split('=')[1];
    });

    return queriesObj;
};

var receiveMediaItem = function receiveMediaItem(mediaItem) {
    return {
        type: _types2.default.RECEIVE_MEDIA_ITEM,
        mediaItem: mediaItem,
        error: null,
        isFetching: false
    };
};
var receiveSimilarRooms = function receiveSimilarRooms(similarRooms) {
    return {
        type: _types2.default.RECEIVE_SIMILAR_ROOMS,
        similarRooms: similarRooms,
        error: null,
        isFetching: false
    };
};
var receiveProducts = function receiveProducts(products) {
    return {
        type: _types2.default.RECEIVE_PRODUCTS,
        products: products,
        error: null,
        isFetching: false
    };
};

var requestMediaItem = function requestMediaItem() {
    return {
        type: _types2.default.REQUEST_MEDIA_ITEM,
        mediaItem: null,
        error: null,
        isFetching: true
    };
};
var requestSimilarRooms = function requestSimilarRooms() {
    return {
        type: _types2.default.REQUEST_SIMILAR_ROOMS,
        similarRooms: null,
        error: null,
        isFetching: true
    };
};
var requestProducts = function requestProducts() {
    return {
        type: _types2.default.REQUEST_PRODUCTS,
        products: null,
        error: null,
        isFetching: true
    };
};

var requestMediaItemFailure = function requestMediaItemFailure(error) {
    return {
        type: _types2.default.REQUEST_MEDIA_ITEM_FAILURE,
        mediaItem: null,
        error: error,
        isFetching: false
    };
};
var requestSimilarRoomsFailure = function requestSimilarRoomsFailure(error) {
    return {
        type: _types2.default.REQUEST_SIMILAR_ROOMS_FAILURE,
        similarRooms: null,
        error: error,
        isFetching: false
    };
};
var requestProductsFailure = function requestProductsFailure(error) {
    return {
        type: _types2.default.REQUEST_PRODUCTS_FAILURE,
        roomProducts: null,
        error: error,
        isFetching: false
    };
};

var fetchMediaItem = exports.fetchMediaItem = function fetchMediaItem() {
    return function (dispatch) {
        dispatch(requestMediaItem());
        var urlData = getUrlQueries();
        (0, _crossFetch2.default)("https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK/items/" + urlData.asset_id).then(function (res) {
            if (res.status !== 200) throw Error(res.statusText);
            return res.json();
        }).then(function (json) {
            return dispatch(receiveMediaItem(json.data.item));
        }).catch(function (error) {
            console.log(error);
            dispatch(requestMediaItemFailure(error));
        });
    };
};

var fetchSimilarRooms = exports.fetchSimilarRooms = function fetchSimilarRooms(items) {
    return function (dispatch) {
        dispatch(requestSimilarRooms());
        var filterData = items.map(function (i) {
            return i;
        }).join('%20or%20label%3A');
        (0, _crossFetch2.default)("https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?filter=label%3A" + filterData + "&sort=Optimized&limit=50").then(function (res) {
            if (res.status !== 200) throw Error(res.statusText);
            return res.json();
        }).then(function (json) {
            return dispatch(receiveSimilarRooms(json.data.items));
        }).catch(function (error) {
            console.log(error);
            dispatch(requestSimilarRoomsFailure(error));
        });
    };
};

var fetchProducts = exports.fetchProducts = function fetchProducts(product_ids) {
    return async function (dispatch) {
        try {
            dispatch(requestProducts());
            var results = await Promise.all(product_ids.map(function (pid) {
                return (0, _crossFetch2.default)("https://lvxlayout.overstock.com/liverex/layout?ch=site&chtype=pla&productId=" + pid).then(function (res) {
                    if (res.status !== 200) throw Error(res.statusText);
                    return res.json();
                }).then(function (json) {
                    return json.elements[0].recs[0];
                });
            }));
            dispatch(receiveProducts(results));
        } catch (error) {
            console.error(error);
            dispatch(requestProductsFailure(error));
        }
    };
};