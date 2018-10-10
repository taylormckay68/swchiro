import React, { Component } from 'react';
import RoomIdeas from './components/RoomIdeas';

class Root extends Component {
    render() {
        return (
          <div id="userActiveRoom">
            <RoomIdeas {...this.props}/>
          </div>
        )
    }
}

export default Root;
