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
var newDataObj = {};
fs.readFile('./dist/js/bundle.min.js', "utf8", function(err, data) {
  if (err) console.log("ERR" ,err);
  bundle = data || "";
})

function generateFullArray() {
  return filterData.rooms.map(rm => format(rm)).concat(filterData.styles['all-rooms'].map(sty => format(sty))).concat(combine(filterData.styles))
}
function combine(obj) {
  return Object.keys(obj).map(key => key === 'all-rooms' ? null : obj[key].map(el => key + '_' + format(el))).filter(el => !!el).reduce((a,b) => a.concat(b))
}

function format(str) {
  return str.toLowerCase().replace(/ /g, '-')
}
function filterCase(str) {
  return str.split('-').map(e => e.substring(0,1).toUpperCase() + e.substring(1)).join(' ');
}

// new CronJob('* 0 0 * * *', () => {
//   let cronArray = generateFullArray()
//   let cronData = cronArray.length ? ['', ...cronArray] : []
//   dataObj.data = {}
//   dataObj.nextData = {}
//   cronData.map((e, i) => {
//     setTimeout(() => {
//       let filters = e.split('_')
//       let key = e || 'default'
//       let room = e ? filters.splice(0,1) : 'default'
//       let roomQuery = key !== 'default' ? room + (filters.length ? '%20and%20(' + filters.join('%20or%20') + ')' : '') : ''
//       let extension = roomQuery ? `&filter=label:${roomQuery}` : ''
//       fetch(`https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?requireProduct=true&sort=Optimized&limit=18${extension}`)
//       .then(function(response) {
//         console.log('Cron Job Fired')
//         return response.json()
//       })
//       .then(data => {
//         dataObj.data[key] = {}
//         dataObj.nextData[key] = data.paging ? data.paging.next : ''
//         let items = data.data ? (data.data.items.length ? data.data.items : []) : {}
//         let redirectRoomQuery = roomQuery ? `&filter=${roomQuery}` : ''
//         dataObj.data[key]= items.map(el => {
//           return({
//             imageUrl: el.media.large.link,
//             redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${el.id}${redirectRoomQuery}`
//           })
//         })
//       }).catch(errHandle)
//     }, (1000 * i))
//   })
// }, null, true, 'America/Los_Angeles', null, true)

function serverPageLoader (req, res) {
  // console.log(dataObj);
  let {room, style} = req.query;
  let modRoom = room && room.length ? (filterData.rooms.indexOf(filterCase(room)) !== -1 ? room.toLowerCase() : null) : null;
  console.log(modRoom);
  let styleArr = style && style.length ? style.split(',') : [];
  console.log('styleArr: ', styleArr);
  let styleCheck = modRoom ? 
                      (styleArr.length ? styleArr.filter(e => filterData.styles[modRoom].indexOf(filterCase(e)) !== -1) 
                      :
                      []) 
                      : (styleArr.length ? styleArr.filter(e => filterData.styles['all-rooms'].indexOf(filterCase(e)) !== -1) 
                      : []);
  console.log('styleCheck: ', styleCheck);
  let key = modRoom ? (styleCheck && styleCheck.length ? (styleCheck.length === 1 ? `${modRoom}_${styleCheck[0].toLowerCase()}`: null) : modRoom) : (styleCheck && styleCheck.length ? (styleCheck.length === 1 ? styleCheck[0] : null) : 'default');
  console.log(key);
  dataObj.queries = req.query;
  // let room = req.query.room || 'default';
  // let styles = req.query.style || '';
  // let noDash = room ? room.replace('-', ' ') : '';
  // let uppercase = noDash ? noDash.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') : '';
  // dataObj.room = filterData.rooms.indexOf(uppercase) !== -1 || !uppercase ? uppercase : '';
  // let roomData = {};
  // if(dataObj.data[room]){
  //   roomData.room = uppercase !== 'Default' ? uppercase : '';
  //   roomData.data = dataObj.data[room];
  //   roomData.nextData = dataObj.nextData[room];
  //   res.set('Cache-Control', 'public, max-age=31557600');
  //   res.send(returnHTML(roomData, RoomsRoot));
  // } else{
  //   roomData.room = filterData.rooms.indexOf(uppercase) !== -1 || !uppercase ? uppercase : '';
  //   roomData.data = dataObj.data['default'];
  //   roomData.nextData = dataObj.nextData['default'];
  //   res.set('Cache-Control', 'public, max-age=31557600');
  //   res.send(returnHTML(roomData, RoomsRoot));
  // }
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
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Room Ideas</title>
          <meta name="Description" content="Room Ideas. Explore hundreds of room ideas to inspire your style.">
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
