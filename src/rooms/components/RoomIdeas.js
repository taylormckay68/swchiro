import React, { Component } from 'react';
import RoomIdeasDiv from './styled-components/RoomIdeas';
import FilterBar from './FilterBar';
import MobileFilter from './MobileFilter';


class RoomIdeas extends Component {
    constructor(props){
        super(props);

        this.state = {
            mobileFilter: false
        }
        this.toggleMobileFitler = this.toggleMobileFitler.bind(this);
    }

    toggleMobileFitler(){
        this.setState({
            mobileFilter: !this.state.mobileFilter
        })
    }
    
    render() {
        return (
            <RoomIdeasDiv>
                <MobileFilter visible={this.state.mobileFilter} toggleMobileFitler={this.toggleMobileFitler}/>
                <FilterBar {...this.props} toggleMobileFitler={this.toggleMobileFitler}/>
            </RoomIdeasDiv>
        );
    }
}

export default RoomIdeas;
