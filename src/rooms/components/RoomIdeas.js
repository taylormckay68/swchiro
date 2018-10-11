import React, { Component } from 'react';
import RoomIdeasDiv from './styled-components/RoomIdeas';
import FilterBar from './FilterBar';
import {FilterBarWrapper, ArrowWrapper, RoomIdeasText, ArrowContainer} from './styled-components/FilterBar';


class RoomIdeas extends Component {
    render() {
        return (
            <RoomIdeasDiv>
                <FilterBar/>
            </RoomIdeasDiv>
        );
    }
}

export default RoomIdeas;
