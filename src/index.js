import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import RoomsRoot from "./rooms/Root";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import {filterData} from './rooms/utils'
import configureStore from './rooms/components/redux/store';
import {Provider} from 'react-redux';

const store = configureStore();

var PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());

var bundle = "";
var dataObj = {};
fs.readFile('./dist/js/bundle.min.js', "utf8", function(err, data) {
  if (err) console.log("ERR" ,err);
  bundle = data || "";
})

app.get('/', (req, res) => {
  let rooms = dataObj.rooms = {};
  rooms.queries = req.query;
  let room = req.query.room || '';
  let styles = req.query.styles || ''
  let noDash = room ? room.replace('-', ' ') : '';
  let uppercase = noDash ? noDash.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') : '';
  let query = room ? (filterData.rooms.indexOf(uppercase) !== -1 || !uppercase ? `&filter=label:${room}` : '') : '';
  rooms.id = filterData.rooms.indexOf(uppercase) !== -1 || !uppercase ? uppercase : '';
  fetcher(`https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=18${query}`)
    .then((response) => {
      let items = response.data ? (response.data.items.length ? response.data.items : []) : {};
      let newData = items.map(e => {
        return({
          imageUrl: e.media.large.link, 
          redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${e.id}`
        })
      });
      rooms.data = newData.length ? newData : [];
      rooms.nextData = response.paging.next || '';
    }).catch(errHandle)
    .then(() => {
        res.set('Cache-Control', 'public, max-age=31557600');
        res.send(returnHTML(dataObj, RoomsRoot));
    }).catch(errHandle);
});

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, function(){
  console.log(`Running on http://localhost:${PORT}`)
});


// functions!!!!!!!!!!!!!


function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach(function(x){
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then(function(response) {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then(function(json){
        return json;
    }).catch(errHandle)
}

function returnHTML(data, Root){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Provider store={store}><Root data={data}/></Provider>));
    const styles = sheet.getStyleTags();
    return `
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Overstock Shop By Room</title>
          <meta name="Description" content="Welcome new movers. Overstock provides you will all of your moving needs and new home styles.">
        </head>
        <script>window.__LPO__=${dataString}</script>
        ${styles}
        <style>body {margin: 0;}</style>
        <div id="app">${body}</div>
        <script defer>${bundle}</script>
      </html>
    `;
}

function errHandle(err){
    console.log(err);
    res.send(returnHTML(dataObj));
}

// function roomsHandler(req, res){
//   let rooms = dataObj.rooms = {};
//   rooms.queries = req.query;
//   let room = req.query.room || '';
//   let styles = req.query.styles || ''
//   let query = room ? `&filter=label:${room}` : '';
//   let noDash = room ? room.replace('-', ' ') : '';
//   let uppercase = noDash ? noDash.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') : '';
//   rooms.id = uppercase;
//   fetcher(`https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=18${query}`)
//     .then((response) => {
//       let items = response.data ? (response.data.items.length ? response.data.items : []) : {};
//       let newData = items.map(e => {
//         return({
//           imageUrl: e.media.large.link, 
//           redirectUrl: `/room?asset_id=${e.id}`
//         })
//       });
//       rooms.data = newData.length ? newData : [];
//       rooms.nextData = response.paging.next || '';
//     }).catch(errHandle)
//     .then(() => {
//       if(filterData.rooms.indexOf(uppercase) !== -1 || !uppercase) {
//         res.set('Cache-Control', 'public, max-age=31557600');
//         res.send(returnHTML(dataObj, RoomsRoot));
//       } else {
//         res.redirect('/rooms')
//       }
//     }).catch(errHandle);
// }
