'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            selectedRoom: ''
            // this.toggleMenu = this.toggleMenu.bind(this);
            // this.offClick = this.offClick.bind(this);
            // this.selectRoom = this.selectRoom.bind(this);
            // this.mobileSelectRoom = this.mobileSelectRoom.bind(this);
        };return _this;
    }
    // componentDidMount(){
    //     let lpo = window.__LPO__ || {};
    //     let rooms = lpo.rooms || {};
    //     let id = rooms.id || '';
    //     id && this.setState({selectedRoom: id});
    // }
    // selectRoom(room){
    //     room && this.props.fetchModsData(room);
    //     this.setState({selectedRoom: room});
    //     this.toggleMenu('roomMenu');
    // }
    // mobileSelectRoom(room){
    //     room && this.props.fetchModsData(room);
    //     this.setState({selectedRoom: room})
    // }

    // offClick(){
    //     this.setState({
    //         roomMenu: false,
    //         styleMenu: false
    //     })
    // }
    // toggleMenu(menu){
    //     if(menu === "mobileMenu") this.setState({mobileMenu: !this.state.mobileMenu, roomMenu: false, styleMenu: false});
    //     if(menu === "roomMenu") this.setState({mobileMenu: false, roomMenu: !this.state.roomMenu, styleMenu: false});
    //     if(menu === "styleMenu") this.setState({mobileMenu: false, roomMenu: false, styleMenu: !this.state.styleMenu});
    // }

    _createClass(RoomIdeas, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _RoomIdeas.RoomIdeasDiv,
                { className: 'room-ideas-div' },
                _react2.default.createElement(
                    'div',
                    null,
                    'Rooms'
                )
            );
        }
    }]);

    return RoomIdeas;
}(_react.Component);

function mapStateToProps(state) {
    return state;
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchModsData: _actions.fetchModsData })(RoomIdeas);