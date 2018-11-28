"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Check_Thin = require("overstock-component-library/lib/Icons/action/Check_Thin");

var _Check_Thin2 = _interopRequireDefault(_Check_Thin);

var _utils = require("../utils");

var _MobileFilter = require("./styled-components/MobileFilter");

var _Filters = require("./styled-components/Filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderCheckmark = function renderCheckmark(visible) {
  return _react2.default.createElement(
    _MobileFilter.MobCheckWrapper,
    { className: "mob-check-wrapper", visible: visible },
    _react2.default.createElement(_Check_Thin2.default, {
      className: "mob-checkmark",
      fill: "#545658",
      height: "100%",
      width: "100%"
    })
  );
};

exports.default = function (_ref) {
  var arr = _ref.arr,
      room = _ref.room,
      selected = _ref.selected,
      selectFunction = _ref.selectFunction,
      showAll = _ref.showAll,
      toggleMore = _ref.toggleMore,
      type = _ref.type;

  var array = showAll ? arr : arr.slice(0, 5);
  return _react2.default.createElement(
    _MobileFilter.RoomsFilterContainer,
    { className: "rooms-filter-container" },
    _react2.default.createElement(
      _MobileFilter.RoomsFilterWrapper,
      null,
      _react2.default.createElement(
        _MobileFilter.RoomsFilterLabel,
        null,
        type
      ),
      array.map(function (e) {
        var visible = type.toLowerCase() === "rooms" ? e === selected : selected.indexOf(e) !== -1;
        var modifiedRoom = room ? room.toLowerCase().replace(" ", "-") : "";
        var grayStyle = modifiedRoom && type.toLowerCase() === "styles" ? _utils.filterData.styles[modifiedRoom].indexOf(e) === -1 : false;
        return _react2.default.createElement(
          _MobileFilter.RoomsFilterOptionsCont,
          {
            key: e,
            className: "rooms-filter-opt-cont",
            onClick: !grayStyle && selectFunction.bind(undefined, e),
            grayStyle: grayStyle
          },
          type.toLowerCase() === "rooms" ? renderCheckmark(visible) : _react2.default.createElement(
            _Filters.CheckContainer,
            { className: "check-container" },
            renderCheckmark(visible)
          ),
          _react2.default.createElement(
            _MobileFilter.MobFilterOptionText,
            {
              className: "mob-filter-option-text",
              bold: visible,
              grayStyle: grayStyle
            },
            e
          )
        );
      })
    ),
    _react2.default.createElement(
      _MobileFilter.ToggleMore,
      { onClick: function onClick() {
          return toggleMore("showMore" + type);
        } },
      "Show ",
      showAll ? "fewer" : "more",
      " ",
      type.toLowerCase()
    )
  );
};