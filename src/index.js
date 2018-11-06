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

var CronJob = require('cron').CronJob;

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


new CronJob('* 0 0 * * *', () => {
  let rooms = filterData.rooms ? [...filterData.rooms, ''] : [];
  dataObj.data = {}
  rooms.map((e, i) => {
    setTimeout(() => {
      let room = e ? e.toLowerCase().replace(' ', '-') : 'default';
      let roomQuery = e !== 'default' ? e.toLowerCase().replace(' ', '-') : '';
      let extension = roomQuery ? `&filter=label:${roomQuery}` : '';
      fetch(`https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=18${extension}`)
      .then(function(response) {
        console.log('Cron Job Fired')
        return response.json();
      })
      .then(data => {
        dataObj.data[room] = {};
        dataObj.nextData = data.paging ? data.paging.next : '';
        let items = data.data ? (data.data.items.length ? data.data.items : []) : {};
        dataObj.data[room]= items.map(el => {
          return({
            imageUrl: el.media.large.link,
            redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${el.id}&room=${roomQuery}`
          })
        })
      }).catch(errHandle);
    }, (2000 * i))
  })
}, null, true, 'America/Los_Angeles', null, true);

function serverPageLoader (req, res) {
  dataObj.queries = req.query;
  let room = req.query.room || 'default';
  let styles = req.query.styles || '';
  let noDash = room ? room.replace('-', ' ') : '';
  let uppercase = noDash ? noDash.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') : '';
  dataObj.id = filterData.rooms.indexOf(uppercase) !== -1 || !uppercase ? uppercase : '';
  if(dataObj.data[room]){
    let roomData = {};
    roomData.id = uppercase !== 'Default' ? uppercase : '';
    roomData.data = dataObj.data[room];
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(roomData, RoomsRoot));
  } else{
    res.redirect('https://www.overstock.com/404')
  }
}

app.get('/', serverPageLoader)

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
