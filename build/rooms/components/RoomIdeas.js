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

        _this.state = {
            mobileMenu: false,
            roomMenu: false,
            styleMenu: false,
            selectedRoom: _this.props.data.rooms.id || ''
        };
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        _this.offClick = _this.offClick.bind(_this);
        _this.selectRoom = _this.selectRoom.bind(_this);
        _this.mobileSelectRoom = _this.mobileSelectRoom.bind(_this);
        _this.loadMore = _this.loadMore.bind(_this);
        return _this;
    }

    // componentDidMount() {
    //     document.addEventListener('scroll', this.handleScroll )
    // }
    // handleScroll = (e) => {
    //     if ((e.target.scrollingElement.scrollHeight - e.target.scrollingElement.scrollTop - 100) < e.target.scrollingElement.clientHeight) { 
    //         if(!this.props.isFetchingNext && this.props.nextRoomsData) {
    //             this.props.fetchNextModsData(this.props.nextRoomsData); 
    //         }
    //     }
    // }


    _createClass(RoomIdeas, [{
        key: 'loadMore',
        value: function loadMore() {
            this.props.nextRoomsData && this.props.fetchNextModsData(this.props.nextRoomsData);
        }
    }, {
        key: 'selectRoom',
        value: function selectRoom(room) {
            room && this.props.fetchModsData(room);
            this.setState({ selectedRoom: room });
            this.toggleMenu('roomMenu');
        }
    }, {
        key: 'mobileSelectRoom',
        value: function mobileSelectRoom(room) {
            this.props.fetchModsData(room);
            this.setState({ selectedRoom: room });
        }
    }, {
        key: 'offClick',
        value: function offClick() {
            this.setState({
                roomMenu: false,
                styleMenu: false
            });
        }
    }, {
        key: 'toggleMenu',
        value: function toggleMenu(menu) {
            if (menu === "mobileMenu") {
                this.setState({ mobileMenu: !this.state.mobileMenu, roomMenu: false, styleMenu: false });
                this.state.mobileMenu && this.refs.mobileFilter.showMoreRooms();
            };
            if (menu === "roomMenu") this.setState({ mobileMenu: false, roomMenu: !this.state.roomMenu, styleMenu: false });
            if (menu === "styleMenu") this.setState({ mobileMenu: false, roomMenu: false, styleMenu: !this.state.styleMenu });
        }
    }, {
        key: 'render',
        value: function render() {
            _utils.config.data = this.props && this.props.modsData;
            return _react2.default.createElement(
                _RoomIdeas.RoomIdeasDiv,
                { className: 'room-ideas-div' },
                this.state.roomMenu || this.state.styleMenu ? _react2.default.createElement(_RoomIdeas.OffClick, { onClick: this.offClick, className: 'offclick' }) : '',
                _react2.default.createElement(_MobileFilter2.default, {
                    className: 'mobile-filter',
                    visible: this.state.mobileMenu,
                    toggleMenu: this.toggleMenu,
                    selectedRoom: this.state.selectedRoom,
                    selectRoom: this.mobileSelectRoom,
                    ref: 'mobileFilter' }),
                _react2.default.createElement(_FilterBar2.default, _extends({}, this.props, {
                    toggleMenu: this.toggleMenu,
                    roomMenu: this.state.roomMenu,
                    styleMenu: this.state.styleMenu,
                    selectedRoom: this.state.selectedRoom,
                    selectRoom: this.selectRoom })),
                this.props.isFetching ? _react2.default.createElement(_LoadingLogo2.default, { center: true }) : _react2.default.createElement(_ProductGrid2.default, {
                    className: 'product-grid',
                    config: _utils.config }),
                this.props.nextRoomsData && !this.props.isFetchingNext && !this.props.isFetching && _react2.default.createElement(
                    _RoomIdeas.LoadMore,
                    { onClick: this.loadMore, className: 'load-more' },
                    'Load More Rooms '
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