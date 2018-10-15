import React, { Component } from 'react';
import {RoomIdeasDiv, OffClick} from './styled-components/RoomIdeas';
import FilterBar from './FilterBar';
import MobileFilter from './MobileFilter';


class RoomIdeas extends Component {
    constructor(props){
        super(props);

        this.state = {
            mobileMenu: false,
            roomMenu: false,
            styleMenu: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.offClick = this.offClick.bind(this);
    }

    offClick(){
        this.setState({
            roomMenu: false,
            styleMenu: false
        })
    }
    toggleMenu(menu){
        if(menu === "mobileMenu") this.setState({mobileMenu: !this.state.mobileMenu, roomMenu: false, styleMenu: false});
        if(menu === "roomMenu") this.setState({mobileMenu: false, roomMenu: !this.state.roomMenu, styleMenu: false});
        if(menu === "styleMenu") this.setState({mobileMenu: false, roomMenu: false, styleMenu: !this.state.styleMenu});
    }
    
    render() {
        return (
            <RoomIdeasDiv>
                {this.state.roomMenu || this.state.styleMenu ? <OffClick onClick={this.offClick} className="offclick"/> : ''}
                <MobileFilter 
                    visible={this.state.mobileMenu} 
                    toggleMenu={this.toggleMenu}/>
                <FilterBar 
                    {...this.props} 
                    toggleMenu={this.toggleMenu} 
                    roomMenu={this.state.roomMenu} 
                    styleMenu={this.state.styleMenu}/>
            </RoomIdeasDiv>
        );
    }
}

export default RoomIdeas;
