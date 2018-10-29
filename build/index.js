"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _Root = require("./home/Root");

var _Root2 = _interopRequireDefault(_Root);

var _Root3 = require("./room/Root");

var _Root4 = _interopRequireDefault(_Root3);

var _Root5 = require("./rooms/Root");

var _Root6 = _interopRequireDefault(_Root5);

var _styledComponents = require("styled-components");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _utils = require("./rooms/utils");

var _vm = require("vm");

var _store = require("./rooms/components/redux/store");

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _store2.default)();

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();
app.use((0, _compression2.default)());

var bundle = "";
var dataObj = {};
_fs2.default.readFile('./dist/js/bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  bundle = data || "";
});

app.get('/rooms/:id', roomsHandler);
app.get('/rooms/', roomsHandler);

app.get('/room/:id', function (req, res) {
  dataObj.params = req.params.id;
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(dataObj, _Root4.default));
});

app.get('/', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(dataObj, _Root2.default));
});

app.get('/health', function (req, res) {
  return res.send('OK');
});

app.listen(PORT, function () {
  console.log("Running on http://localhost:" + PORT);
});

// functions!!!!!!!!!!!!!


function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch2.default)(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  }).catch(errHandle);
}

function returnHTML(data, Root) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(Root, { data: data })
  )));
  var styles = sheet.getStyleTags();
  return "\n      <html>\n        <head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Overstock Shop By Room</title>\n          <meta name=\"Description\" content=\"Welcome new movers. Overstock provides you will all of your moving needs and new home styles.\">\n        </head>\n        <script>window.__LPO__=" + dataString + "</script>\n        " + styles + "\n        <style>body {margin: 0;}</style>\n        <div id=\"app\">" + body + "</div>\n        <script defer>" + bundle + "</script>\n      </html>\n    ";
}

function errHandle(err) {
  console.log(err);
  res.send(returnHTML(dataObj));
}

function roomsHandler(req, res) {
  var rooms = dataObj.rooms = {};
  rooms.queries = req.query;
  var room = req.query.room || '';
  var styles = req.query.styles || '';
  var query = room ? "&filter=label:" + room : '';
  var noDash = room ? room.replace('-', ' ') : '';
  var uppercase = noDash ? noDash.toLowerCase().split(' ').map(function (s) {
    return s.charAt(0).toUpperCase() + s.substring(1);
  }).join(' ') : '';
  rooms.id = uppercase;
  fetcher("https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=50" + query).then(function (response) {
    var items = response.data ? response.data.items.length ? response.data.items : [] : {};
    var newData = items.map(function (e) {
      return {
        imageUrl: e.media.large.link,
        redirectUrl: 'https://overstock.com/room'
      };
    });
    rooms.data = newData.length ? newData : [];
  }).catch(errHandle).then(function () {
    if (_utils.filterData.rooms.indexOf(uppercase) !== -1 || !uppercase) {
      res.set('Cache-Control', 'public, max-age=31557600');
      res.send(returnHTML(dataObj, _Root6.default));
    } else {
      res.redirect('/rooms');
    }
  }).catch(errHandle);
}