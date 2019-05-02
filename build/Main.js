'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Main;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _reactRouterDom = require('react-router-dom');

var _Home = require('./Home/Home.js');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {} from './styled-components/Root';

function Main() {
    console.log('home: ', _Home2.default);
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'home'
                    );
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/services', render: function render() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        'services'
                    );
                } })
        )
    );
}