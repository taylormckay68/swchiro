import React, { Component } from 'react';
import Main from './components/Main';

class Root extends Component {
    render() {
        return (
          <div id="userActiveRoom">
            <Main {...this.props}/>
          </div>
        )
    }
}

export default Root;
