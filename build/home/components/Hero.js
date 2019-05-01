'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Hero;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hero = require('./styled-components/Hero');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hero() {
    return _react2.default.createElement(
        _Hero.HeroWrapper,
        { className: 'hero-wrapper' },
        _react2.default.createElement(
            _Hero.BusinessWrapper,
            { className: 'business-wrapper' },
            _react2.default.createElement(
                _Hero.BusinessName,
                { className: 'business-name' },
                'Southwest ',
                _react2.default.createElement('br', null),
                ' Chiropractic'
            ),
            _react2.default.createElement(
                _Hero.CallButton,
                { className: 'call-button' },
                '801-254-09400'
            )
        )
    );
}