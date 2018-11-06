'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroImg = exports.LoadMore = exports.OffClick = exports.RoomIdeasDiv = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100vw;\n    position: relative;\n'], ['\n    width: 100vw;\n    position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n'], ['\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 200px;\n    height: 34px;\n    background-color: #2F3337;\n    color: #fff;\n    border-radius: 1px;\n    font-size: 14px;\n    font-family: "Helvetica Neue",Helvetica,Arial;\n    font-weight: 400;\n    margin: -56px auto 16px;\n    display: flex;\n    justify-content: center;\n'], ['\n    width: 200px;\n    height: 34px;\n    background-color: #2F3337;\n    color: #fff;\n    border-radius: 1px;\n    font-size: 14px;\n    font-family: "Helvetica Neue",Helvetica,Arial;\n    font-weight: 400;\n    margin: -56px auto 16px;\n    display: flex;\n    justify-content: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width:100vw;\n    height: 0;\n    padding-bottom: calc(100vw/1.5); \n    max-width: 1780px;\n    background-image: url(\'https://cdn2.webdamdb.com/1280_gLj9PkeYcj79.jpg?1541529106\');\n    background-size: cover;\n    background-position: contain;\n    background-repeat: no-repeat;\n    @media(min-width: 570px){\n        padding-bottom: calc(100vw/3);\n        background-image: url(\'https://cdn2.webdamdb.com/1280_Ucd6O2fnKrR3.jpg?1541529112\');\n    }\n    @media(min-width: 1128px){\n        padding-bottom: calc(100vw/4);\n        background-image: url(\'https://cdn2.webdamdb.com/1280_MOrXT6VOXGO5.jpg?1541529105\');\n    }\n    @media(min-width: 1780px){\n        padding-bottom: calc(1780px/4);\n        margin: auto;\n    }\n'], ['\n    width:100vw;\n    height: 0;\n    padding-bottom: calc(100vw/1.5); \n    max-width: 1780px;\n    background-image: url(\'https://cdn2.webdamdb.com/1280_gLj9PkeYcj79.jpg?1541529106\');\n    background-size: cover;\n    background-position: contain;\n    background-repeat: no-repeat;\n    @media(min-width: 570px){\n        padding-bottom: calc(100vw/3);\n        background-image: url(\'https://cdn2.webdamdb.com/1280_Ucd6O2fnKrR3.jpg?1541529112\');\n    }\n    @media(min-width: 1128px){\n        padding-bottom: calc(100vw/4);\n        background-image: url(\'https://cdn2.webdamdb.com/1280_MOrXT6VOXGO5.jpg?1541529105\');\n    }\n    @media(min-width: 1780px){\n        padding-bottom: calc(1780px/4);\n        margin: auto;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RoomIdeasDiv = exports.RoomIdeasDiv = _styledComponents2.default.div(_templateObject);

var OffClick = exports.OffClick = _styledComponents2.default.div(_templateObject2);
var LoadMore = exports.LoadMore = _styledComponents2.default.button(_templateObject3);
var HeroImg = exports.HeroImg = _styledComponents2.default.div(_templateObject4);