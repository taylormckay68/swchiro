'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    align-items: center;\n    background: rgba(100,100,100,.5);\n    border-radius: 100%;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    max-height: 10vw;\n    max-width: 10vw;\n    position: absolute;\n    top: ', '%;\n    left: ', '%;\n    transform: translateX(', ') translateY(', ');\n    width: 40px;\n    height: 40px;\n'], ['\n    align-items: center;\n    background: rgba(100,100,100,.5);\n    border-radius: 100%;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    max-height: 10vw;\n    max-width: 10vw;\n    position: absolute;\n    top: ', '%;\n    left: ', '%;\n    transform: translateX(', ') translateY(', ');\n    width: 40px;\n    height: 40px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background: #fff;\n    border-radius: 100%;\n    position: absolute;\n    width: 20%;\n    height: 20%;\n'], ['\n    background: #fff;\n    border-radius: 100%;\n    position: absolute;\n    width: 20%;\n    height: 20%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    -moz-apperance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 100%;\n    cursor: pointer;\n    margin: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n'], ['\n    -moz-apperance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 100%;\n    cursor: pointer;\n    margin: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_Component) {
    _inherits(Location, _Component);

    function Location(props) {
        _classCallCheck(this, Location);

        var _this = _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).call(this, props));

        _this.handleClick = function (event) {
            var _this$props = _this.props,
                id = _this$props.id,
                updateLocation = _this$props.updateLocation;


            event.stopPropagation();
            updateLocation(id);
        };

        return _this;
    }

    _createClass(Location, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                coords = _props.coords,
                product = _props.product,
                handleClick = this.handleClick;
            var x = coords.x,
                y = coords.y;

            var offsetX = x >= .9 ? '-50%' : x <= .1 ? 0 : '-50%';
            var offsetY = y >= .9 ? '-50%' : y <= .1 ? 0 : '-50%';

            if (!product) return _react2.default.createElement('div', null);
            return _react2.default.createElement(
                Wrapper,
                { onClick: handleClick, offsetX: offsetX, offsetY: offsetY, coords: { x: x, y: y } },
                _react2.default.createElement(InnerCircle, null),
                _react2.default.createElement(Loc, { type: 'radio' })
            );
        }
    }]);

    return Location;
}(_react.Component);

exports.default = Location;


var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return (props.coords ? props.coords.y : 1) * 100;
}, function (props) {
    return (props.coords ? props.coords.x : 1) * 100;
}, function (props) {
    return props.offsetX;
}, function (props) {
    return props.offsetY;
});

var InnerCircle = _styledComponents2.default.span(_templateObject2);

var Loc = _styledComponents2.default.input(_templateObject3);