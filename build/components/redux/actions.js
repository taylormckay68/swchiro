"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addToCart = exports.addToClicked = exports.addToSeen = exports.fetchModsData = undefined;

var _types = require("./types");

var _types2 = _interopRequireDefault(_types);

var _crossFetch = require("cross-fetch");

var _crossFetch2 = _interopRequireDefault(_crossFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//mod actions
var receiveModsData = function receiveModsData(modsData) {
    return {
        type: _types2.default.RECEIVE_MODS_DATA,
        modsData: modsData,
        error: null,
        isFetching: false
    };
};

var requestModsData = function requestModsData() {
    return {
        type: _types2.default.REQUEST_MODS_DATA,
        modsData: null,
        error: null,
        isFetching: true
    };
};

var requestModsDataFailure = function requestModsDataFailure(error) {
    return {
        type: _types2.default.REQUEST_MODS_DATA_FAILURE,
        modsData: null,
        error: error,
        isFetching: false
    };
};

var getUrlQueries = function getUrlQueries() {
    var ostk = window.ostk || {};
    var ostkdata = ostk.data || {};
    var ostktrack = ostkdata.track || {};
    var pageViewData = ostktrack.pageViewData || {};
    var ostkcustomer = pageViewData.customer || {};
    var userseed = ostkcustomer.userSeed || "";
    var cust_id = ostkcustomer.id || "";
    var loc = window.location || {};
    var locsearch = loc.search ? loc.search.slice(1) : "";
    var queries = locsearch.split('&') || [];
    var qObj = {};
    queries.forEach(function (x) {
        var y = x.split('=');
        qObj[y[0]] = y[1];
    });
    return {
        prod_id: qObj.featuredproduct || "20254422",
        option_id: qObj.featuredoption || "8510014",
        cust_id: cust_id || userseed || "61069817"
    };
    console.log("get queries before request");
};
var fetchModsData = exports.fetchModsData = function fetchModsData() {
    return function (dispatch) {
        dispatch(requestModsData());
        var urlData = getUrlQueries();
        (0, _crossFetch2.default)("https://lvxlayout.overstock.com/liverex/layout?ch=site&chtype=pla&productId=" + urlData.prod_id + "&productOptionId=" + urlData.option_id + "&customerid=" + urlData.cust_id).then(function (response) {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function (json) {
            //fetchCoopData(dispatch, json.elements);
            dispatch(receiveModsData(json.elements));
        }).catch(function (error) {
            console.log(error);
            dispatch(requestModsDataFailure(error));
        });
    };
};

//add to cart actions
var requestAddToCart = function requestAddToCart() {
    return {
        type: _types2.default.REQUEST_ADD_TO_CART,
        error: null,
        isAddingToCart: true
    };
};

var requestAddToCartSuccess = function requestAddToCartSuccess() {
    return {
        type: _types2.default.REQUEST_ADD_TO_CART_SUCCESS,
        error: null,
        isAddingToCart: false
    };
};

var requestAddToCartFailure = function requestAddToCartFailure(error) {
    return {
        type: _types2.default.REQUEST_ADD_TO_CART_FAILURE,
        error: error,
        isAddingToCart: false
    };
};

var addToSeen = exports.addToSeen = function addToSeen(item) {
    return {
        type: _types2.default.ADD_TO_SEEN,
        item: item
    };
};

var addToClicked = exports.addToClicked = function addToClicked(item) {
    return {
        type: _types2.default.ADD_TO_CLICKED,
        item: item
    };
};

var addToCart = exports.addToCart = function addToCart(item) {

    var queryParams = "addId" + item.productId + "=" + item.optionId + "&addqty" + item.productId + "=1";

    return function (dispatch) {
        dispatch(requestAddToCart());
        (0, _crossFetch2.default)("/api/cart.json?" + queryParams, {
            method: 'POST',
            credentials: 'include'
        }).then(function (response) {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            dispatch(requestAddToCartSuccess());
        }).catch(function (error) {
            console.error(error);
            dispatch(requestAddToCartFailure(error));
        });
    };
};