'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return _react2.default.createElement(
        _Navbar.NavbarCont,
        { className: 'navbar' },
        _react2.default.createElement(
            _Navbar.LogoCont,
            { className: 'logo-cont' },
            _react2.default.createElement(_Navbar.Logo, { className: 'logo', src: 'http://i67.tinypic.com/2gwdmr8.png' }),
            _react2.default.createElement(
                _Navbar.LogoText,
                { className: 'logo-text' },
                'Southwest ',
                _react2.default.createElement('br', null),
                'Chiropractic'
            )
        )
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./styled-components/Navbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }