'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _lodash = require('lodash');

var _reactSizes = require('react-sizes');

var _reactSizes2 = _interopRequireDefault(_reactSizes);

var _reactResizeDetector = require('react-resize-detector');

var _reactResizeDetector2 = _interopRequireDefault(_reactResizeDetector);

var _ArrowButton = require('./../GlobalComponents/ArrowButton');

var _ArrowButton2 = _interopRequireDefault(_ArrowButton);

var _SliderComponentSlotCount = require('./styled-components/SliderComponentSlotCount2');

var _SliderComponentAll = require('./styled-components/SliderComponentAll');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderComponent = function (_Component) {
    _inherits(SliderComponent, _Component);

    function SliderComponent(props) {
        _classCallCheck(this, SliderComponent);

        var _this = _possibleConstructorReturn(this, (SliderComponent.__proto__ || Object.getPrototypeOf(SliderComponent)).call(this));

        _this.slideSlot = function (position) {
            _this.setState({
                sliding: true,
                position: position
            });
            setTimeout(function () {
                _this.setState({ sliding: false });
            }, 1000);
        };

        _this.showNextSlot = function () {
            var position = _this.state.position;

            var slots = _this.props.data;
            if (_this.props.slotCount == 2) {
                if (_this.props.firstBp || _this.props.secondBp) {
                    if (position < slots.length - 1) _this.slideSlot(position + 1);
                } else {
                    if (position + 2 < slots.length) _this.slideSlot(position + 1);
                }
            } else {
                if (_this.props.firstBp || _this.props.secondBp) {
                    if (position + 2 < slots.length) _this.slideSlot(position + 1);
                } else if (_this.props.thirdBp) {
                    if (position + 3 < slots.length) _this.slideSlot(position + 1);
                } else {
                    if (position + 4 < slots.length) _this.slideSlot(position + 1);
                }
            }
        };

        _this.showPrevSlot = function () {
            var position = _this.state.position;

            if (position >= 1) _this.slideSlot(position - 1);
        };

        _this.handleSwipe = (0, _lodash.throttle)(function (isNext) {
            if (isNext) _this.showNextSlot();else _this.showPrevSlot();
        }, 1000, { trailing: false });

        _this.onResize = function () {
            if (_this.props.slotCount == 2) {
                if (_this.props.firstBp) {
                    _this.calcSlotWidth(24, 24, 0, 1);
                } else if (_this.props.secondBp) {
                    _this.calcSlotWidth(24, 24, 0, 1);
                } else if (_this.props.thirdBp) {
                    _this.calcSlotWidth(24, 24, 16, 2);
                } else if (_this.props.fourthBp) {
                    _this.calcSlotWidth(24, 24, 16, 2);
                }
            } else {
                if (_this.props.firstBp) {
                    _this.calcSlotWidth(24, 24, 12, 2);
                } else if (_this.props.secondBp) {
                    _this.calcSlotWidth(24, 24, 16, 2);
                } else if (_this.props.thirdBp) {
                    _this.calcSlotWidth(24, 24, 32, 3);
                } else if (_this.props.fourthBp) {
                    _this.calcSlotWidth(24, 24, 48, 4);
                }
            }
        };

        _this.calcSlotWidth = function (leftMargin, rightMargin, middleMargin, slots) {
            var sliderWidth = _this.slider.clientWidth;
            var slotWidth = (sliderWidth - leftMargin - rightMargin - middleMargin) / slots;
            var slotWidthPercentage = slotWidth / (sliderWidth - leftMargin) * 100;
            _this.setState({ slotWidth: slotWidthPercentage });
        };

        _this.handleDrag = (0, _lodash.throttle)(function (e) {
            _this.setState({ diff: e.x });
        }, 1000, { trailing: false });
        _this.handleEnd = (0, _lodash.throttle)(function (e) {
            _this.setState({ diff: _this.state.diff - e.x });
            if (_this.state.diff > 0) _this.showNextSlot();else if (_this.state.diff < 0) _this.showPrevSlot();
            _this.setState({ diff: 0 });
        }, 1000, { trailing: false });

        _this.state = {
            position: 0,
            sliding: false,
            slotWidth: null,
            diff: 0
        };
        return _this;
    }

    _createClass(SliderComponent, [{
        key: 'mapSlots',
        value: function mapSlots(props) {
            var Slot = this.props.slotComponent;
            var slots = this.props.data;
            var slotCount = this.props.slotCount;
            var self = this;
            return slots.map(function (slot, idx) {
                if (slotCount == 2) {
                    return _react2.default.createElement(
                        _SliderComponentSlotCount.SliderSlotSlotCount2,
                        { id: idx, key: _shortid2.default.generate(), slots: slots.length, slotWidth: self.state.slotWidth },
                        _react2.default.createElement(Slot, { slotdata: slot })
                    );
                } else {
                    return _react2.default.createElement(
                        _SliderComponentAll.SliderSlotAll,
                        { id: idx, key: _shortid2.default.generate(), slots: slots.length, slotWidth: self.state.slotWidth },
                        _react2.default.createElement(Slot, { slotdata: slot })
                    );
                }
            });
        }
    }, {
        key: 'renderSlider',
        value: function renderSlider() {
            var _this2 = this;

            var _state = this.state,
                sliding = _state.sliding,
                position = _state.position;

            var images = this.props.data.length;
            if (this.props.slotCount == 2) {
                return _react2.default.createElement(
                    _SliderComponentSlotCount.SliderWrapperSlotCount2,
                    { className: 'handle', display: this.props.display, innerRef: function innerRef(slider) {
                            return _this2.slider = slider;
                        } },
                    _react2.default.createElement(_reactResizeDetector2.default, { handleWidth: true, onResize: this.onResize }),
                    _react2.default.createElement(
                        _SliderComponentSlotCount.OverflowWrapperSlotCount2,
                        { display: this.props.display },
                        _react2.default.createElement(
                            _SliderComponentSlotCount.SliderContainerSlotCount2,
                            { position: position, sliding: sliding, slotWidth: this.state.slotWidth },
                            this.mapSlots()
                        )
                    ),
                    _react2.default.createElement(_ArrowButton2.default, { bump30: this.props.slotCount == 2 ? true : null, images: images, position: position, onClick: function onClick() {
                            return _this2.handleSwipe(true);
                        }, right: true, display: true }),
                    _react2.default.createElement(_ArrowButton2.default, { bump30: this.props.slotCount == 2 ? true : null, images: images, position: position, onClick: function onClick() {
                            return _this2.handleSwipe();
                        }, right: false })
                );
            } else {
                return _react2.default.createElement(
                    _SliderComponentAll.SliderWrapperAll,
                    { className: 'handle', display: this.props.display, innerRef: function innerRef(slider) {
                            return _this2.slider = slider;
                        } },
                    _react2.default.createElement(_reactResizeDetector2.default, { handleWidth: true, onResize: this.onResize }),
                    _react2.default.createElement(
                        _SliderComponentAll.OverflowWrapperAll,
                        { display: this.props.display },
                        _react2.default.createElement(
                            _SliderComponentAll.SliderContainerAll,
                            { position: position, sliding: sliding, slotWidth: this.state.slotWidth },
                            this.mapSlots()
                        )
                    ),
                    _react2.default.createElement(_ArrowButton2.default, { bump30: this.props.slotCount == 2 ? true : null, images: images, position: position, onClick: function onClick() {
                            return _this2.handleSwipe(true);
                        }, right: true, display: true }),
                    _react2.default.createElement(_ArrowButton2.default, { bump30: this.props.slotCount == 2 ? true : null, images: images, position: position, onClick: function onClick() {
                            return _this2.handleSwipe();
                        }, right: false })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var isMobile = this.props.isMobile;

            var images = this.props.data;

            if (isMobile && images.length > 1) {
                return _react2.default.createElement(
                    _reactSwipeable2.default,
                    { onSwipingLeft: function onSwipingLeft() {
                            return _this3.handleSwipe(true);
                        }, onSwipingRight: function onSwipingRight() {
                            return _this3.handleSwipe();
                        } },
                    this.renderSlider()
                );
            } else {
                return _react2.default.createElement(
                    _reactDraggable2.default,
                    { bounds: { left: 0, top: 0, right: 0, bottom: 0 }, onStop: this.handleEnd, onDrag: this.handleDrag },
                    this.renderSlider()
                );
            }
        }
    }]);

    return SliderComponent;
}(_react.Component);

SliderComponent.propTypes = {
    display: _propTypes2.default.bool
};

var os = window.os || {};
var isTouchDevice = os.isTouchDevice || false;
var mapSizestoProbs = function mapSizestoProbs(_ref) {
    var width = _ref.width;
    return {
        firstBp: width < 570,
        secondBp: width < 744,
        thirdBp: width < 970,
        fourthBp: width < 1128,
        isMobile: isTouchDevice
    };
};

exports.default = (0, _reactSizes2.default)(mapSizestoProbs)(SliderComponent);