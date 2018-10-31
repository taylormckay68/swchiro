'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    max-width: 1620px;\n    margin: 24px;\n\n    @media(min-width: 1128px) {\n        margin: 24px 80px;\n    }\n    @media(min-width: 1780px) {\n        margin: 24px auto;\n    }\n'], ['\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n    max-width: 1620px;\n    margin: 24px;\n\n    @media(min-width: 1128px) {\n        margin: 24px 80px;\n    }\n    @media(min-width: 1780px) {\n        margin: 24px auto;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    align-items: center;\n    background: #f5f6f7;\n    border-radius: 20px;\n    color: #545658;\n    display: flex;\n    flex-direction: row;\n    padding: 10px 30px;\n'], ['\n    align-items: center;\n    background: #f5f6f7;\n    border-radius: 20px;\n    color: #545658;\n    display: flex;\n    flex-direction: row;\n    padding: 10px 30px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: flex-end;\n'], ['\n    display: flex;\n    justify-content: flex-end;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    align-items: center;\n    background: ', ';\n    border-radius: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    margin-left: 8px;\n    max-width: 20vw;\n    max-height: 20vw;\n    padding: 10px;\n    width: 40px;\n    height: 40px;\n\n    svg {\n        fill: #fff;\n    }\n'], ['\n    align-items: center;\n    background: ', ';\n    border-radius: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    margin-left: 8px;\n    max-width: 20vw;\n    max-height: 20vw;\n    padding: 10px;\n    width: 40px;\n    height: 40px;\n\n    svg {\n        fill: #fff;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    width: 100%;\n\n'], ['\n    width: 100%;\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    width: 100%;\n    fill: red;\n'], ['\n    width: 100%;\n    fill: red;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    width: 100%;\n'], ['\n    width: 100%;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n    height: 0;\n    width: 0;\n    font-size: 0;\n    border: none;\n'], ['\n    height: 0;\n    width: 0;\n    font-size: 0;\n    border: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Email_Fill = require('overstock-component-library/lib/Icons/communication/Email_Fill');

var _Email_Fill2 = _interopRequireDefault(_Email_Fill);

var _Facebook = require('overstock-component-library/lib/Icons/social/Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Twitter = require('overstock-component-library/lib/Icons/social/Twitter');

var _Twitter2 = _interopRequireDefault(_Twitter);

var _Pinterest = require('overstock-component-library/lib/Icons/social/Pinterest');

var _Pinterest2 = _interopRequireDefault(_Pinterest);

var _Link = require('overstock-component-library/lib/Icons/navigation/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Small_Left = require('overstock-component-library/lib/Icons/arrows/Small_Left');

var _Small_Left2 = _interopRequireDefault(_Small_Left);

var _reactCopyToClipboard = require('react-copy-to-clipboard');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = function (_Component) {
    _inherits(Icons, _Component);

    function Icons(props) {
        _classCallCheck(this, Icons);

        var _this = _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).call(this, props));

        _this.onCopy = function () {
            _this.setState({ copied: true, value: window.location.href });
        };

        _this.state = {
            copied: false,
            currentUrl: typeof window !== 'undefined' ? window.location.href : '',
            value: ''
        };
        return _this;
    }

    _createClass(Icons, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                currentUrl = _state.currentUrl,
                value = _state.value,
                onCopy = this.onCopy;


            return typeof window !== 'undefined' ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    Wrapper,
                    null,
                    _react2.default.createElement(
                        BackButton,
                        { onClick: function onClick() {
                                return window.history.back();
                            } },
                        _react2.default.createElement(_Small_Left2.default, { color: '#545658' }),
                        'Back'
                    ),
                    _react2.default.createElement(
                        IconWrapper,
                        null,
                        _react2.default.createElement(
                            Bubble,
                            { target: '_blank', href: "https://www.facebook.com/sharer/sharer.php?s=100&p[url]" + currentUrl, color: '#35609f' },
                            _react2.default.createElement(FacebookIcon, null)
                        ),
                        _react2.default.createElement(
                            Bubble,
                            { target: '_blank', href: "https://twitter.com/intent/tweet?url=" + currentUrl, color: '#2ca9e1' },
                            _react2.default.createElement(TwitterIcon, null)
                        ),
                        _react2.default.createElement(
                            Bubble,
                            { target: '_blank', href: "https://www.pinterest.com/pin/create/button/?url=" + currentUrl, color: '#cb2025' },
                            _react2.default.createElement(PinterestIcon, null)
                        ),
                        _react2.default.createElement(
                            _reactCopyToClipboard.CopyToClipboard,
                            { text: value, onCopy: onCopy },
                            _react2.default.createElement(
                                Bubble,
                                { color: '#6a6a6a' },
                                _react2.default.createElement(LinkIcon, { viewBox: '-4 -4 32 32' })
                            )
                        )
                    )
                )
            ) : _react2.default.createElement('div', null);
        }
    }]);

    return Icons;
}(_react.Component);

exports.default = Icons;


var Wrapper = _styledComponents2.default.div(_templateObject);

var BackButton = _styledComponents2.default.div(_templateObject2);

var IconWrapper = _styledComponents2.default.div(_templateObject3);

var Bubble = _styledComponents2.default.a(_templateObject4, function (props) {
    return props.color;
});

var EmailIcon = (0, _styledComponents2.default)(_Email_Fill2.default)(_templateObject5);
var FacebookIcon = (0, _styledComponents2.default)(_Facebook2.default)(_templateObject5);
var TwitterIcon = (0, _styledComponents2.default)(_Twitter2.default)(_templateObject5);
var PinterestIcon = (0, _styledComponents2.default)(_Pinterest2.default)(_templateObject6);
var LinkIcon = (0, _styledComponents2.default)(_Link2.default)(_templateObject7);

var HiddenInput = _styledComponents2.default.textarea(_templateObject8);