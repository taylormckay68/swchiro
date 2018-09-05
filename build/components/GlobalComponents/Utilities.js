'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var times = exports.times = function times(n) {
    return function (f) {
        return Array(n).fill().map(function (_, i) {
            return f(i);
        });
    };
};

var extractPrice = exports.extractPrice = function extractPrice(priceDetail) {
    if (priceDetail) {
        var numericPrice = priceDetail.includes('$') ? priceDetail.split('$')[1] : priceDetail;
        var numericDetail = numericPrice.split('.');
        var dollarAmt = numericDetail[0];
        var centAmt = numericDetail[1];

        return {
            dollarAmt: dollarAmt,
            centAmt: centAmt
        };
    }
};