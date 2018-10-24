import React from 'react';
import { hydrate } from 'react-dom';
import RoomIdeas from './components/RoomIdeas';
import {Provider} from 'react-redux';
import configureStore from './components/redux/store';

const store = configureStore();

var rooms = document.getElementById('userActiveRooms');
if(rooms && window) hydrate(<Provider store={store}><RoomIdeas data={window.__LPO__}/></Provider>, document.getElementById('userActiveRooms'));
