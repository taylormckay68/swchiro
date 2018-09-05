'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RoomIdeas = require('./styled-components/RoomIdeas');

var _RoomIdeas2 = _interopRequireDefault(_RoomIdeas);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _CoopMod = require('overstock-marketing-component-library/module/lib/js/CoopMod');

var _CoopMod2 = _interopRequireDefault(_CoopMod);

var _CategoryMod = require('overstock-marketing-component-library/module/lib/js/CategoryMod');

var _CategoryMod2 = _interopRequireDefault(_CategoryMod);

var _CatMockData = require('./MockData/CatMockData');

var _CatMockData2 = _interopRequireDefault(_CatMockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import OasisHeroMod from 'overstock-marketing-component-library/module/lib/js/OasisHeroMod';


var RoomIdeas = function (_Component) {
    _inherits(RoomIdeas, _Component);

    function RoomIdeas() {
        _classCallCheck(this, RoomIdeas);

        return _possibleConstructorReturn(this, (RoomIdeas.__proto__ || Object.getPrototypeOf(RoomIdeas)).apply(this, arguments));
    }

    _createClass(RoomIdeas, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _RoomIdeas2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mainDiv' },
                    'Room Ideas'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mainDiv' },
                    'Shopping Guide Mod - this is where Shop By Room will be'
                ),
                _react2.default.createElement(_CategoryMod2.default, { className: 'mainDiv', data: _CatMockData2.default.recs, title: "Here are some couches..." }),
                _react2.default.createElement(
                    'div',
                    { className: 'mainDiv' },
                    'Need Inspiration Banner'
                ),
                _react2.default.createElement(_CoopMod2.default, { className: 'mainDiv' })
            );
        }
    }]);

    return RoomIdeas;
}(_react.Component);

exports.default = RoomIdeas;