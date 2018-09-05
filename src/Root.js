import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './components/store/configureStore';
import RoomIdeas from './components/RoomIdeas';

const store = configureStore();

class Root extends Component {
    render() {
        return (
          <Provider store={store}>
              <RoomIdeas/>
          </Provider>
        )
    }
}

export default Root;
