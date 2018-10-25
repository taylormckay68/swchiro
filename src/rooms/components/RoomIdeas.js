import React, { Component } from 'react';
import {connect} from 'react-redux';
import {RoomIdeasDiv, OffClick} from './styled-components/RoomIdeas';
import FilterBar from './FilterBar';
import MobileFilter from './MobileFilter';
import {fetchModsData} from './redux/actions';

class RoomIdeas extends Component {
    constructor(props){
        super(props);

        this.state = {
            mobileMenu: false,
            roomMenu: false,
            styleMenu: false,
            selectedRoom: '',
        }
        // this.toggleMenu = this.toggleMenu.bind(this);
        // this.offClick = this.offClick.bind(this);
        // this.selectRoom = this.selectRoom.bind(this);
        // this.mobileSelectRoom = this.mobileSelectRoom.bind(this);
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
    
    render() {
        return (
            <RoomIdeasDiv className="room-ideas-div">
                {/* {this.state.roomMenu || this.state.styleMenu ? <OffClick onClick={this.offClick} className="offclick"/> : ''}
                <MobileFilter
                    className="mobile-filter"
                    visible={this.state.mobileMenu} 
                    toggleMenu={this.toggleMenu}
                    selectedRoom={this.state.selectedRoom}
                    selectRoom={this.mobileSelectRoom}/>
                <FilterBar 
                    {...this.props} 
                    toggleMenu={this.toggleMenu} 
                    roomMenu={this.state.roomMenu} 
                    styleMenu={this.state.styleMenu}
                    selectedRoom={this.state.selectedRoom}
                    selectRoom={this.selectRoom}/> */}
                    <div>Rooms</div>
            </RoomIdeasDiv>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {fetchModsData})(RoomIdeas);

