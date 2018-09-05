import express from "express";

import React from "react";
import { renderToString } from "react-dom/server";
import Root from "./Root";
import { ServerStyleSheet } from 'styled-components';

var PORT = process.env.PORT || 3000;

const app = express();

app.get('/', ( req, res ) => {
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Root />));
    const styles = sheet.getStyleTags();
    res.send(`
      ${styles}
      <div id="app">
        ${body}
      </div>
    `);
});

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, function(){
  console.log(`Running on http://localhost:${PORT}`)
});
