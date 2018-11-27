'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _RoomIdeas = require('./styled-components/RoomIdeas');

var _FilterBar = require('./FilterBar');

var _FilterBar2 = _interopRequireDefault(_FilterBar);

var _MobileFilter = require('./MobileFilter');

var _MobileFilter2 = _interopRequireDefault(_MobileFilter);

var _actions = require('./redux/actions');

var _ProductGrid = require('lpo-component-library/module/ProductGrid');

var _ProductGrid2 = _interopRequireDefault(_ProductGrid);

var _utils = require('../utils');

var _LoadingLogo = require('lpo-component-library/module/LoadingLogo');

var _LoadingLogo2 = _interopRequireDefault(_LoadingLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoomIdeas = function (_Component) {
  _inherits(RoomIdeas, _Component);

  function RoomIdeas(props) {
    _classCallCheck(this, RoomIdeas);

    var _this = _possibleConstructorReturn(this, (RoomIdeas.__proto__ || Object.getPrototypeOf(RoomIdeas)).call(this, props));

    _this.loadMore = function () {
      _this.props.nextRoomsData && _this.props.fetchNextModsData(_this.props.nextRoomsData, _this.state.selectedRoom);
    };

    _this.selectRoom = function (room) {
      var rm = room === _this.state.selectedRoom ? '' : room;
      room && _this.props.fetchModsData(rm, _this.state.selectedStyles);
      _this.setState({ selectedRoom: rm });
      _this.toggleMenu('roomMenu');
    };

    _this.mobileSelectFilter = function (room, styles) {
      _this.props.fetchModsData(room, styles);
      _this.setState({ selectedRoom: room, selectedStyles: styles });
    };

    _this.setStyles = function (styles) {
      return _this.setState({ selectedStyles: styles }, function () {
        _this.props.fetchModsData(_this.state.selectedRoom, _this.state.selectedStyles);
      });
    };

    _this.offClick = function () {
      _this.setState({
        roomMenu: false,
        styleMenu: false
      });
    };

    _this.toggleMenu = function (menu) {
      if (menu === 'mobileMenu') {
        _this.setState({
          mobileMenu: !_this.state.mobileMenu,
          roomMenu: false,
          styleMenu: false
        });
      }
      if (menu === 'roomMenu') _this.setState({
        mobileMenu: false,
        roomMenu: !_this.state.roomMenu,
        styleMenu: false
      });
      if (menu === 'styleMenu') _this.setState({
        mobileMenu: false,
        roomMenu: false,
        styleMenu: !_this.state.styleMenu
      });
    };

    _this.state = {
      mobileMenu: false,
      roomMenu: false,
      style: _this.props.data.style,
      styleMenu: false,
      selectedRoom: _this.props.data.room || '',
      selectedStyles: _this.props.data.style || []
    };
    return _this;
  }

  _createClass(RoomIdeas, [{
    key: 'render',


    // componentDidMount(){
    //     window.onpopstate = () => {
    //         console.log('url changed');
    //     }
    // }

    value: function render() {
      _utils.config.data = this.props && this.props.modsData ? this.props.modsData : this.props.data.data;
      return _react2.default.createElement(
        _RoomIdeas.RoomIdeasDiv,
        { className: 'room-ideas-div' },
        this.state.roomMenu || this.state.styleMenu ? _react2.default.createElement(_RoomIdeas.OffClick, { onClick: this.offClick, className: 'offclick' }) : '',
        _react2.default.createElement(_RoomIdeas.HeroImg, null),
        _react2.default.createElement(_MobileFilter2.default, {
          className: 'mobile-filter',
          visible: this.state.mobileMenu,
          toggleMenu: this.toggleMenu,
          selectedRoom: this.state.selectedRoom,
          selectedStyles: this.state.selectedStyles,
          selectFilter: this.mobileSelectFilter,
          ref: 'mobileFilter'
        }),
        _react2.default.createElement(_FilterBar2.default, _extends({}, this.props, {
          setStyles: this.setStyles,
          toggleMenu: this.toggleMenu,
          roomMenu: this.state.roomMenu,
          styleMenu: this.state.styleMenu,
          selectedRoom: this.state.selectedRoom,
          selectedStyles: this.state.selectedStyles,
          selectRoom: this.selectRoom
        })),
        this.props.isFetching ? _react2.default.createElement(_LoadingLogo2.default, { center: true }) : _react2.default.createElement(_ProductGrid2.default, { className: 'product-grid', config: _utils.config }),
        this.props.nextRoomsData && !this.props.isFetchingNext && !this.props.isFetching && _react2.default.createElement(
          _RoomIdeas.LoadMore,
          { onClick: this.loadMore, className: 'load-more' },
          'Load More Rooms',
          ' '
        )
      );
    }
  }]);

  return RoomIdeas;
}(_react.Component);

function mapStateToProps(state) {
  return state;
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchModsData: _actions.fetchModsData, fetchNextModsData: _actions.fetchNextModsData })(RoomIdeas);