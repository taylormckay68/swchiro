import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import HomeRoot from "./home/Root";
import RoomRoot from "./room/Root";
import RoomsRoot from "./rooms/Root";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';

var PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());

var bundle = "";
var dataObj = {};
fs.readFile('./dist/js/bundle.min.js', "utf8", function(err, data) {
  if (err) console.log("ERR" ,err);
  bundle = data || "";
})

app.get('/rooms', function(req, res){
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(dataObj, RoomsRoot));
});

app.get('/room/:id', function(req, res){
  dataObj.params = req.params.id
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(dataObj, RoomRoot));
});

app.get('/', function(req, res){
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(dataObj, HomeRoot));
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
    const body = renderToString(sheet.collectStyles(<Root data={data}/>));
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
