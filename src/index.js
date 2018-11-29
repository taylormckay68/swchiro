import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import RoomsRoot from "./rooms/Root";
import { ServerStyleSheet } from "styled-components";
import fs from "fs";
import compression from "compression";
import { filterData } from "./rooms/utils";
import configureStore from "./rooms/components/redux/store";
import { Provider } from "react-redux";

var CronJob = require("cron").CronJob;

const store = configureStore();

var PORT = process.env.PORT || 3001;

const app = express();
app.use(compression());

var bundle = "";
var dataObj = {};
fs.readFile("./dist/js/bundle.min.js", "utf8", function(err, data) {
  if (err) console.log("ERR", err);
  bundle = data || "";
});

function generateFullArray() {
  return filterData.rooms
    .map(rm => format(rm))
    .concat(filterData.styles["all-rooms"].map(sty => format(sty)))
    .concat(combine(filterData.styles));
}
function combine(obj) {
  return Object.keys(obj)
    .map(key =>
      key === "all-rooms" ? null : obj[key].map(el => key + "_" + format(el))
    )
    .filter(el => !!el)
    .reduce((a, b) => a.concat(b));
}

function format(str) {
  return str.toLowerCase().replace(/ /g, "-");
}
function filterCase(str) {
  return str
    .split("-")
    .map(e => e.charAt(0).toUpperCase() + e.substring(1))
    .join(" ");
}

new CronJob(
  "0 0 0 * * *",
  () => {
    let cronArray = generateFullArray();
    let cronData = cronArray.length ? ["", ...cronArray] : [];
    dataObj.data = {};
    dataObj.nextData = {};
    cronData.map((e, i) => {
      setTimeout(() => {
        let filters = e.split("_");
        let room = filters.length === 2
          ? filters[0]
          : (filters.length === 1 && filterData.rooms.indexOf(filterCase(filters[0])) !== -1
            ? filters[0]
            : '')
        let style = room && filters.length > 1
          ? filters[1]
          : (!room && filters.length && filters[0]
            ? filters[0]
            : '')
        let altText = room
          ? (style
            ? `${filterCase(style)} ${filterCase(room)} Design`
            : `${filterCase(room)} Design`)
          : (style
            ? `${filterCase(style)} Room Design`
            : `Room Design`)
        let key = e || "default";
        let firstFilter = e ? filters.splice(0, 1) : "default";
        let roomQuery =
          key !== "default"
            ? firstFilter +
              (filters.length
                ? "%20and%20(label:" + filters.join("%20or%20label:") + ")"
                : "")
            : "";
        let extension = roomQuery ? `&filter=label:${roomQuery}` : "";
        fetch(
          `https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?requireProduct=true&sort=Optimized&limit=18${extension}`
        )
          .then(function(response) {
            console.log(`Cron Job ${i + 1} Fired`);
            return response.json();
          })
          .then(data => {
            dataObj.data[key] = {};
            dataObj.nextData[key] =
              data.paging && data.paging.next ? data.paging.next : "";
            let items = data.data
              ? data.data.items.length
                ? data.data.items
                : []
              : {};
            let redirectRoomQuery = room ? `&room=${room}` : "";
            let redirectStyleQuery = style ? `&style=${style}` : '';
            dataObj.data[key] = items.map(el => {
              return {
                imageUrl: el.media.large.link,
                redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${
                  el.id
                }${redirectRoomQuery}${redirectStyleQuery}`,
                altTag: altText
              };
            });
          })
          .catch(errHandle);
      }, 2000 * i);
    });
  },
  null,
  true,
  "America/Los_Angeles",
  null,
  true
);

function serverPageLoader(req, res) {
  let { room, style } = req.query;
  let roomData = {};
  let modRoom =
    room && room.length
      ? filterData.rooms.indexOf(filterCase(room.toLowerCase())) !== -1
        ? room.toLowerCase()
        : ""
      : "";
  let styleArr = style && style.length ? style.split(",") : [];
  let styleCheck = modRoom
    ? styleArr.length
      ? styleArr.filter(
          e => filterData.styles[modRoom].indexOf(filterCase(e)) !== -1
        )
      : []
    : styleArr.length
    ? styleArr.filter(
        e => filterData.styles["all-rooms"].indexOf(filterCase(e)) !== -1
      )
    : [];

  let key = modRoom
    ? styleCheck && styleCheck.length
      ? styleCheck.length === 1
        ? `${modRoom}_${styleCheck[0].toLowerCase()}`
        : null
      : modRoom
    : styleCheck && styleCheck.length
    ? styleCheck.length === 1
      ? styleCheck[0]
      : null
    : "default";

  if (
    key &&
    key !== "default" &&
    dataObj &&
    dataObj.data &&
    dataObj.data[key] &&
    dataObj.data[key].length
  ) {
    roomData.room = modRoom ? filterCase(modRoom) : "";
    roomData.style =
      styleCheck && styleCheck.length ? styleCheck.map(e => filterCase(e)) : [];
    roomData.data = dataObj.data[key];
    roomData.nextData = dataObj.nextData[key];
    res.set("Cache-Control", "public, max-age=31557600");
    res.send(returnHTML(roomData, RoomsRoot));
  } else {
    let roomQuery =
      key !== "default"
        ? modRoom +
          (modRoom && styleCheck.length ? "%20and%20(label:" : "") +
          (styleCheck.length ? styleCheck.join("%20or%20label:") : "") +
          (modRoom && styleCheck.length ? ")" : "")
        : "";
    let extension = roomQuery ? `&filter=label:${roomQuery}` : "";
    fetch(
      `https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?requireProduct=true&sort=Optimized&limit=18${extension}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        roomData.room = modRoom ? filterCase(modRoom) : "";
        roomData.style =
          styleCheck && styleCheck.length
            ? styleCheck.map(e => filterCase(e))
            : [];
        let { room, style } = roomData;
        let redirectRoomQuery = modRoom ? `&room=${modRoom}` : "";
        let redirectStyleQuery = styleCheck.length
          ? `&style=${styleCheck.join(",")}`
          : "";
        let altText = room
          ? style.length
            ? `${style[0]} ${room} Design`
            : `${room} Design`
          : style.length > 1
          ? `${style[0]} or ${style[1]} Room Design`
          : style.length === 1
          ? `${style[0]} Room Design`
          : `Room Design`;
        roomData.data = data.data.items.map(e => {
          return {
            imageUrl: e.media.large.link,
            redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${
              e.id
            }${redirectRoomQuery}${redirectStyleQuery}`,
            altTag: altText
          };
        });
        roomData.nextData =
          data.paging && data.paging.next ? data.paging.next : "";

        res.set("Cache-Control", "public, max-age=31557600");
        res.send(returnHTML(roomData, RoomsRoot));
      })
      .catch(errHandle);
  }
}

app.get("/", serverPageLoader);

app.get("/health", (req, res) => res.send("OK"));

app.listen(PORT, function() {
  console.log(`Running on http://localhost:${PORT}`);
});

// functions!!!!!!!!!!!!!

function getQueries(req, res) {
  const qOb = {};
  const queries =
    req &&
    req._parsedUrl &&
    req._parsedUrl.query &&
    req._parsedUrl.query.split("&")
      ? req._parsedUrl.query.split("&")
      : [];
  if (queries.length) {
    queries.forEach(function(x) {
      var y = x.split("=");
      qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url) {
  return fetch(url)
    .then(function(response) {
      if (response.status !== 200) throw Error(response.statusText);
      return response.json();
    })
    .then(function(json) {
      return json;
    })
    .catch(errHandle);
}

function returnHTML(data, Root) {
  const dataString = JSON.stringify(data);
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <Root data={data} />
      </Provider>
    )
  );
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

function errHandle(err) {
  console.log(err);
  res.send(returnHTML(dataObj));
}
