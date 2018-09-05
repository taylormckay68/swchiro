'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInviewMonitor = require('react-inview-monitor');

var _reactInviewMonitor2 = _interopRequireDefault(_reactInviewMonitor);

var _reactRedux = require('react-redux');

var _actions = require('../redux/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PixelWrapperComponent = function (_Component) {
    _inherits(PixelWrapperComponent, _Component);

    function PixelWrapperComponent() {
        _classCallCheck(this, PixelWrapperComponent);

        return _possibleConstructorReturn(this, (PixelWrapperComponent.__proto__ || Object.getPrototypeOf(PixelWrapperComponent)).apply(this, arguments));
    }

    _createClass(PixelWrapperComponent, [{
        key: 'sendTrackingEvent',
        value: function sendTrackingEvent(eventType) {
            var ostk = window.ostk || {};
            var ostkdata = ostk.data || {};
            var ostktrack = ostkdata.track || {};
            var pageViewData = ostktrack.pageViewData || {};
            var ostkcustomer = pageViewData.customer || {};
            var userseed = ostkcustomer.userSeed || "";
            var cust_id = ostkcustomer.id || "";
            var ehid = ostkcustomer.internalEmailHash || "";
            var url = "https://nkkmfsfq10.execute-api.us-west-1.amazonaws.com/adpevents";
            var channel = "email";
            var channelType = "abi";
            var sessionId = "sessionId";
            var elementId = this.props.prod_id;
            var tid = "12345678";
            var eid = Math.round((new Date().getTime() / 1000).toString(10));
            var uri = url + '?eid=' + eid + '&chnl=' + channel + '&chnltype=' + channelType + '&etype=' + eventType + '\n                     &aid=' + this.props.assetId + '&uid=' + userseed + '&ehid=' + ehid + '&sid=' + sessionId + '&pos=' + 0 + '&viewable=' + true + '&elmid=' + elementId + '\n                     &tid=' + tid + '&rid=' + this.props.rId;
            new Image().src = encodeURI(uri);
        }
    }, {
        key: 'onAssetView',
        value: function onAssetView() {
            if (!this.props.seen.has(this.props.assetId)) {
                this.props.addToSeen(this.props.assetId);
                this.sendTrackingEvent('view');
            }
        }
    }, {
        key: 'onAssetClick',
        value: function onAssetClick() {
            if (!this.props.clicked.has(this.props.assetId)) {
                this.sendTrackingEvent('click');
                this.props.addToClicked(this.props.assetId);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactInviewMonitor2.default,
                { onInView: function onInView() {
                        return _this2.onAssetView();
                    } },
                _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            return _this2.onAssetClick();
                        } },
                    this.props.children
                )
            );
        }
    }]);

    return PixelWrapperComponent;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        seen: state.seen,
        clicked: state.clicked
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        addToSeen: function addToSeen(item) {
            return dispatch((0, _actions.addToSeen)(item));
        },
        addToClicked: function addToClicked(item) {
            return dispatch((0, _actions.addToClicked)(item));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PixelWrapperComponent);