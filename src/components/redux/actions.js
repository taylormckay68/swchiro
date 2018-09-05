"use strict";
import types from "./types";
import fetch from 'cross-fetch';

//mod actions
const receiveModsData = (modsData) => ({
    type: types.RECEIVE_MODS_DATA,
    modsData,
    error: null,
    isFetching: false
});

const requestModsData = () => ({
    type: types.REQUEST_MODS_DATA,
    modsData: null,
    error: null,
    isFetching: true
});

const requestModsDataFailure = (error) => ({
    type: types.REQUEST_MODS_DATA_FAILURE,
    modsData: null,
    error,
    isFetching: false
});


const getUrlQueries = () => {
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
      queries.forEach(function(x){
          var y = x.split('=');
          qObj[y[0]] = y[1];
      });
  return {
    prod_id: qObj.featuredproduct || "20254422",
    option_id: qObj.featuredoption || "8510014",
    cust_id: cust_id || userseed || "61069817"
  };
  console.log("get queries before request")
}
export const fetchModsData = () => {
    return (dispatch) => {
        dispatch(requestModsData());
        const urlData = getUrlQueries();
        fetch(`https://lvxlayout.overstock.com/liverex/layout?ch=site&chtype=pla&productId=${urlData.prod_id}&productOptionId=${urlData.option_id}&customerid=${urlData.cust_id}`)
            .then(function(response) {
                if(response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function(json){
               //fetchCoopData(dispatch, json.elements);
               dispatch(receiveModsData(json.elements));
            })
            .catch(function(error){
                console.log(error);
                dispatch(requestModsDataFailure(error));
            });
    };
};

//add to cart actions
const requestAddToCart = () => ({
    type: types.REQUEST_ADD_TO_CART,
    error: null,
    isAddingToCart: true,
});

const requestAddToCartSuccess = () => ({
    type: types.REQUEST_ADD_TO_CART_SUCCESS,
    error: null,
    isAddingToCart: false,
});

const requestAddToCartFailure = (error) => ({
    type: types.REQUEST_ADD_TO_CART_FAILURE,
    error,
    isAddingToCart: false,
});

export const addToSeen = (item) => ({
    type: types.ADD_TO_SEEN,
    item
});

export const addToClicked = (item) => ({
    type: types.ADD_TO_CLICKED,
    item
});

export const addToCart = (item) => {

    const queryParams = `addId${item.productId}=${item.optionId}&addqty${item.productId}=1`;

    return (dispatch) => {
        dispatch(requestAddToCart());
        fetch(`/api/cart.json?${queryParams}`, {
            method: 'POST',
            credentials: 'include'
        })
            .then((response) => {
                if(response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(requestAddToCartSuccess())
            })
            .catch((error) => {
                console.error(error);
                dispatch(requestAddToCartFailure(error));
            });
    }

};
