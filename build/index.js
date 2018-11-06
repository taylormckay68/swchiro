"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _Root = require("./rooms/Root");

var _Root2 = _interopRequireDefault(_Root);

var _styledComponents = require("styled-components");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _utils = require("./rooms/utils");

var _store = require("./rooms/components/redux/store");

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var CronJob = require('cron').CronJob;

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

new CronJob('* 0 0 * * *', function () {
  var rooms = _utils.filterData.rooms ? [].concat(_toConsumableArray(_utils.filterData.rooms), ['']) : [];
  dataObj.data = {};
  dataObj.nextData = {};
  rooms.map(function (e, i) {
    setTimeout(function () {
      var room = e ? e.toLowerCase().replace(' ', '-') : 'default';
      var roomQuery = e !== 'default' ? e.toLowerCase().replace(' ', '-') : '';
      var extension = roomQuery ? "&filter=label:" + roomQuery : '';
      (0, _nodeFetch2.default)("https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=18" + extension).then(function (response) {
        console.log('Cron Job Fired');
        return response.json();
      }).then(function (data) {
        dataObj.data[room] = {};
        dataObj.nextData[room] = data.paging ? data.paging.next : '';
        var items = data.data ? data.data.items.length ? data.data.items : [] : {};
        dataObj.data[room] = items.map(function (el) {
          return {
            imageUrl: el.media.large.link,
            redirectUrl: "https://www.overstock.com/welcome?pageId=k8s2498&asset_id=" + el.id + "&room=" + roomQuery
          };
        });
      }).catch(errHandle);
    }, 2000 * i);
  });
}, null, true, 'America/Los_Angeles', null, true);

function serverPageLoader(req, res) {
  dataObj.queries = req.query;
  var room = req.query.room || 'default';
  var styles = req.query.styles || '';
  var noDash = room ? room.replace('-', ' ') : '';
  var uppercase = noDash ? noDash.toLowerCase().split(' ').map(function (s) {
    return s.charAt(0).toUpperCase() + s.substring(1);
  }).join(' ') : '';
  dataObj.id = _utils.filterData.rooms.indexOf(uppercase) !== -1 || !uppercase ? uppercase : '';
  if (dataObj.data[room]) {
    var roomData = {};
    roomData.id = uppercase !== 'Default' ? uppercase : '';
    roomData.data = dataObj.data[room];
    roomData.nextData = dataObj.nextData[room];
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(roomData, _Root2.default));
  } else {
    res.redirect('https://www.overstock.com/404');
  }
}

app.get('/', serverPageLoader);

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