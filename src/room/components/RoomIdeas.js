import React, { Component } from 'react';
import RoomIdeasDiv from './styled-components/RoomIdeas';

class RoomIdeas extends Component {
    render() {
        return (
            <RoomIdeasDiv>
                <div className="mainDiv">Room {this.props.data.params}</div>
            </RoomIdeasDiv>
        );
    }
}

export default RoomIdeas;
