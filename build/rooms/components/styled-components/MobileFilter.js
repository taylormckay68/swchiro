'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleMore = exports.RoomsFilterOptionsCont = exports.RoomsFilterLabel = exports.RoomsFilterWrapper = exports.RoomsFilterContainer = exports.CloseButtonText = exports.CloseButtonWrapper = exports.ResultsButton = exports.MobFilterFooter = exports.MobFilterHeader = exports.MobFilterWrapper = exports.MobileInnerWrapper = exports.HeaderClear = exports.HeaderText = exports.HeaderTextWrapper = exports.MobFilterOptionText = exports.MobCheckWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  height: 24px;\n  width: 24px;\n  display: flex;\n  align-items: center;\n  padding: 2px 0 0 2px;\n  visibility: ', ';\n'], ['\n  height: 24px;\n  width: 24px;\n  display: flex;\n  align-items: center;\n  padding: 2px 0 0 2px;\n  visibility: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-family: HelveticaNeue;\n  font-size: 14px;\n  font-weight: ', ';\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #545658;\n  margin-left: 8px;\n  opacity: ', ';\n'], ['\n  font-family: HelveticaNeue;\n  font-size: 14px;\n  font-weight: ', ';\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #545658;\n  margin-left: 8px;\n  opacity: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n'], ['\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-family: HelveticaNeue;\n  font-size: 28px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.86;\n  letter-spacing: normal;\n  color: #545658;\n'], ['\n  font-family: HelveticaNeue;\n  font-size: 28px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.86;\n  letter-spacing: normal;\n  color: #545658;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-family: HelveticaNeue;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #545658;\n  cursor: pointer;\n'], ['\n  font-family: HelveticaNeue;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #545658;\n  cursor: pointer;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  height: 100vh;\n  overflow-y: scroll;\n  padding-bottom: 72px;\n  width: 100%;\n'], ['\n  box-sizing: border-box;\n  height: 100vh;\n  overflow-y: scroll;\n  padding-bottom: 72px;\n  width: 100%;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  background: white;\n  overflow-y: scroll;\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  transform: ', ';\n  transition: all 0.3s;\n  visibility: ', ';\n  width: 100vw;\n  z-index: 6000;\n'], ['\n  background: white;\n  overflow-y: scroll;\n  min-height: 100vh;\n  position: fixed;\n  top: 0;\n  transform: ', ';\n  transition: all 0.3s;\n  visibility: ', ';\n  width: 100vw;\n  z-index: 6000;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  height: 68px;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 8px 24px;\n  box-sizing: border-box;\n'], ['\n  height: 68px;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 8px 24px;\n  box-sizing: border-box;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  height: 72px;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 14px 24px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n'], ['\n  height: 72px;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 14px 24px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  height: 44px;\n  width: 120px;\n  border-radius: 22px;\n  background-color: #0272a2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: HelveticaNeue;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #ffffff;\n  cursor: pointer;\n'], ['\n  height: 44px;\n  width: 120px;\n  border-radius: 22px;\n  background-color: #0272a2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: HelveticaNeue;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #ffffff;\n  cursor: pointer;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n'], ['\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  margin-left: 10px;\n  font-family: HelveticaNeue;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #545658;\n'], ['\n  margin-left: 10px;\n  font-family: HelveticaNeue;\n  font-size: 13px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #545658;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  width: 100%;\n  min-height: 100px;\n  border-bottom: 1px solid rgba(151, 151, 151, 0.2);\n  padding: 24px;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  min-height: 100px;\n  border-bottom: 1px solid rgba(151, 151, 151, 0.2);\n  padding: 24px;\n  box-sizing: border-box;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  height: ', ';\n  width: 100%;\n  overflow: hidden;\n'], ['\n  height: ', ';\n  width: 100%;\n  overflow: hidden;\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n  font-family: HelveticaNeue;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  color: #545658;\n'], ['\n  font-family: HelveticaNeue;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.6;\n  letter-spacing: normal;\n  color: #545658;\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  height: 24px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 24px;\n  cursor: ', ';\n'], ['\n  height: 24px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 24px;\n  cursor: ', ';\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  font-family: HelveticaNeue;\n  font-size: 14px;\n  line-height: 1.71;\n  color: #0272a2;\n  cursor: pointer;\n  display: block;\n  margin-top: 28px;\n'], ['\n  font-family: HelveticaNeue;\n  font-size: 14px;\n  line-height: 1.71;\n  color: #0272a2;\n  cursor: pointer;\n  display: block;\n  margin-top: 28px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MobCheckWrapper = exports.MobCheckWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.visible ? 'visible' : 'hidden';
});
var MobFilterOptionText = exports.MobFilterOptionText = _styledComponents2.default.p(_templateObject2, function (props) {
  return props.bold ? 'bold' : 'normal';
}, function (props) {
  return props.grayStyle ? '.5' : '1';
});
var HeaderTextWrapper = exports.HeaderTextWrapper = _styledComponents2.default.div(_templateObject3);
var HeaderText = exports.HeaderText = _styledComponents2.default.p(_templateObject4);
var HeaderClear = exports.HeaderClear = _styledComponents2.default.p(_templateObject5);
var MobileInnerWrapper = exports.MobileInnerWrapper = _styledComponents2.default.div(_templateObject6);
var MobFilterWrapper = exports.MobFilterWrapper = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.visible ? 'translateX(0)' : 'translateX(-100vw)';
}, function (props) {
  return props.visible ? 'visible' : 'hidden';
});
var MobFilterHeader = exports.MobFilterHeader = _styledComponents2.default.div(_templateObject8);
var MobFilterFooter = exports.MobFilterFooter = _styledComponents2.default.div(_templateObject9);
var ResultsButton = exports.ResultsButton = _styledComponents2.default.div(_templateObject10);
var CloseButtonWrapper = exports.CloseButtonWrapper = _styledComponents2.default.div(_templateObject11);
var CloseButtonText = exports.CloseButtonText = _styledComponents2.default.p(_templateObject12);

//Rooms filter
var RoomsFilterContainer = exports.RoomsFilterContainer = _styledComponents2.default.div(_templateObject13);
var RoomsFilterWrapper = exports.RoomsFilterWrapper = _styledComponents2.default.div(_templateObject14, function (props) {
  return props.showMore ? '295px' : 'max-content';
});
var RoomsFilterLabel = exports.RoomsFilterLabel = _styledComponents2.default.div(_templateObject15);
var RoomsFilterOptionsCont = exports.RoomsFilterOptionsCont = _styledComponents2.default.div(_templateObject16, function (props) {
  return props.grayStyle ? 'default' : 'pointer';
});
var ToggleMore = exports.ToggleMore = _styledComponents2.default.div(_templateObject17);