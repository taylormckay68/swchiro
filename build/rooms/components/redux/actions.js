'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchModsData = exports.test = undefined;

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = exports.test = function test() {
    return {
        test1: 'test',
        type: _types2.default.TEST
    };
};

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

var fetchModsData = exports.fetchModsData = function fetchModsData(room) {
    var roomName = room.length ? room.toLowerCase().replace(' ', '-') : '';
    var query = roomName.length ? '&filter=label:' + roomName : '';
    return function (dispatch) {
        dispatch(requestModsData());
        (0, _crossFetch2.default)('https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=50' + query).then(function (response) {
            return response.status !== 200 ? Error(response.statusText) : response.json();
        }).then(function (json) {
            var items = json.data ? json.data.items.length ? json.data.items : [] : {};
            var newData = items.map(function (e) {
                return {
                    imageUrl: e.media.large.link,
                    redirectUrl: 'https://overstock.com/room'
                };
            });
            dispatch(receiveModsData(newData));
        }).catch(function (error) {
            return dispatch(requestModsDataFailure(error));
        });
    };
};