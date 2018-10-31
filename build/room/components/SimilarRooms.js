'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n'], ['\n    display: flex;\n    flex-direction: column;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 0 -8px;\n\n    @media(max-width: 743px) {\n        margin: 0 -6px;\n    }\n'], ['\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin: 0 -8px;\n\n    @media(max-width: 743px) {\n        margin: 0 -6px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Room = require('./Room');

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function randomizeRooms(mediaItem, rooms) {
    if (!rooms || !rooms.length) return [];

    var currentIndex = rooms.length,
        randomized = rooms.slice(),
        temporaryValue = '',
        randomIndex = 0;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = randomized[currentIndex];
        randomized[currentIndex] = randomized[randomIndex];
        randomized[randomIndex] = temporaryValue;
    }

    return randomized.filter(function (room) {
        return room.id !== mediaItem.id;
    }).slice(0, 6);
}

var SimilarRooms = function (_Component) {
    _inherits(SimilarRooms, _Component);

    function SimilarRooms(props) {
        _classCallCheck(this, SimilarRooms);

        var _this = _possibleConstructorReturn(this, (SimilarRooms.__proto__ || Object.getPrototypeOf(SimilarRooms)).call(this, props));

        _this.state = {
            randomRooms: []
        };
        return _this;
    }

    _createClass(SimilarRooms, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(next) {
            var mediaItem = next.mediaItem,
                rooms = next.rooms;


            console.log('SIMROOMS', rooms, this.props);

            if ((!this.props.rooms || !this.props.rooms.length) && rooms && rooms.length) this.setState({ randomRooms: randomizeRooms(mediaItem, rooms) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                mediaItem = _props.mediaItem,
                rooms = _props.rooms,
                updateFeaturedRoom = _props.updateFeaturedRoom,
                state = this.state;

            var randomRooms = state.randomRooms && state.randomRooms.length ? state.randomRooms : randomizeRooms(mediaItem, rooms);

            return _react2.default.createElement(
                SimilarWrapper,
                null,
                _react2.default.createElement(
                    Title,
                    null,
                    'Rooms You Might Like'
                ),
                _react2.default.createElement(
                    Rooms,
                    null,
                    randomRooms.map(function (rm, idx) {
                        return _react2.default.createElement(_Room2.default, { room: rm, index: idx, updateFeaturedRoom: updateFeaturedRoom });
                    })
                )
            );
        }
    }]);

    return SimilarRooms;
}(_react.Component);

exports.default = SimilarRooms;


var SimilarWrapper = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.h2(_templateObject2);

var Rooms = _styledComponents2.default.div(_templateObject3);