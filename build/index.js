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

var CronJob = require('cron').CronJob;

var store = (0, _store2.default)();

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();
app.use((0, _compression2.default)());

var bundle = "";
var dataObj = {};
var newDataObj = {};
_fs2.default.readFile('./dist/js/bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  bundle = data || "";
});

function generateFullArray() {
  return _utils.filterData.rooms.map(function (rm) {
    return format(rm);
  }).concat(_utils.filterData.styles['all-rooms'].map(function (sty) {
    return format(sty);
  })).concat(combine(_utils.filterData.styles));
}
function combine(obj) {
  return Object.keys(obj).map(function (key) {
    return key === 'all-rooms' ? null : obj[key].map(function (el) {
      return key + '_' + format(el);
    });
  }).filter(function (el) {
    return !!el;
  }).reduce(function (a, b) {
    return a.concat(b);
  });
}

function format(str) {
  return str.toLowerCase().replace(/ /g, '-');
}
function filterCase(str) {
  return str.split('-').map(function (e) {
    return e.substring(0, 1).toUpperCase() + e.substring(1);
  }).join(' ');
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

function serverPageLoader(req, res) {
  // console.log(dataObj);
  var _req$query = req.query,
      room = _req$query.room,
      style = _req$query.style;

  var modRoom = room && room.length ? _utils.filterData.rooms.indexOf(filterCase(room)) !== -1 ? room.toLowerCase() : null : null;
  console.log(modRoom);
  var styleArr = style && style.length ? style.split(',') : [];
  console.log('styleArr: ', styleArr);
  var styleCheck = modRoom ? styleArr.length ? styleArr.filter(function (e) {
    return _utils.filterData.styles[modRoom].indexOf(filterCase(e)) !== -1;
  }) : [] : styleArr.length ? styleArr.filter(function (e) {
    return _utils.filterData.styles['all-rooms'].indexOf(filterCase(e)) !== -1;
  }) : [];
  console.log('styleCheck: ', styleCheck);
  var key = modRoom ? styleCheck && styleCheck.length ? styleCheck.length === 1 ? modRoom + "_" + styleCheck[0].toLowerCase() : null : modRoom : styleCheck && styleCheck.length ? styleCheck.length === 1 ? styleCheck[0] : null : 'default';
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
  return "\n    <!DOCTYPE html>\n      <html lang=\"en\">\n        <head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Room Ideas</title>\n          <meta name=\"Description\" content=\"Room Ideas. Explore hundreds of room ideas to inspire your style.\">\n        </head>\n        <script>window.__LPO__=" + dataString + "</script>\n        " + styles + "\n        <style>body {margin: 0;}</style>\n        <div id=\"app\">" + body + "</div>\n        <script defer>" + bundle + "</script>\n      </html>\n    ";
}

function errHandle(err) {
  console.log(err);
  res.send(returnHTML(dataObj));
}