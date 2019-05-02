import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import Root from "./Root";
import { ServerStyleSheet } from "styled-components";
import fs from "fs";
import compression from "compression";


var PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());

var bundle = "";
var dataObj = {};
fs.readFile("./dist/js/bundle.min.js", "utf8", function(err, data) {
  if (err) console.log("ERR", err);
  bundle = data || "";
});

function serverPageLoader(req, res) {
    let data = {};
    res.set("Cache-Control", "public, max-age=31557600");
    res.send(returnHTML(data, Root));
}

app.get("/*", (req, res) => {
  const context = {};
  res.set("Cache-Control", "public, max-age=31557600");
  res.send(returnHTML(context, Root, req));
});

app.get("/health", (req, res) => res.send("OK"));

app.listen(PORT, function() {
  console.log(`Running on http://localhost:${PORT}`);
});

// functions!!!!!!!!!!!!!

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

function returnHTML(data, Root, req) {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={{}}>
        <Root data={data} />
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags();
  return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Southwest Chiropractic</title>
          <meta name="Description" content="Chiropractic office located in South Jordan, UT">
        </head>
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
