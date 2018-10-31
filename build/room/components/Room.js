'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 8px;\n    width: calc(100% / 3);\n\n    @media(max-width: 1509px) {\n        width: 50%;\n    }\n    @media(max-width: 569px) {\n        padding: 6px;\n        width: 100%;\n\n        &.high-index {\n            display: none;\n        }    \n    }\n'], ['\n    box-sizing: border-box;\n    cursor: pointer;\n    padding: 8px;\n    width: calc(100% / 3);\n\n    @media(max-width: 1509px) {\n        width: 50%;\n    }\n    @media(max-width: 569px) {\n        padding: 6px;\n        width: 100%;\n\n        &.high-index {\n            display: none;\n        }    \n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background: url(', ') center center no-repeat;\n    background-size: cover;\n    border-radius: 4px;\n    padding-top: 67%;\n'], ['\n    background: url(', ') center center no-repeat;\n    background-size: cover;\n    border-radius: 4px;\n    padding-top: 67%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
    var index = _ref.index,
        room = _ref.room,
        updateFeaturedRoom = _ref.updateFeaturedRoom;

    var imageLink = room ? room.media.large.link : '';

    return _react2.default.createElement(
        RoomWrapper,
        { className: index > 1 ? 'high-index' : '', onClick: function onClick() {
                return updateFeaturedRoom(room.id);
            }, imageLink: imageLink },
        _react2.default.createElement(Room, { imageLink: imageLink })
    );
};

var RoomWrapper = _styledComponents2.default.div(_templateObject);

var Room = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.imageLink;
});