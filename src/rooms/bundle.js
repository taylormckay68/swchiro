import React from 'react';
import { hydrate } from 'react-dom';
import RoomIdeas from './components/RoomIdeas';
import {Provider} from 'react-redux';
import configureStore from './components/redux/store';

let preloadedState = window.__LPO__ ? window.__LPO__ : {};
let updatedState = {
    modsData: preloadedState.rooms.data,
    roomsID:  preloadedState.rooms.id,
    nextRoomsData: preloadedState.rooms.nextData,
    isFetching: false,
    error: null
}
const store = configureStore(updatedState);

var rooms = document.getElementById('userActiveRooms');
if(rooms && window) hydrate(<Provider store={store}><RoomIdeas data={window.__LPO__}/></Provider>, document.getElementById('userActiveRooms'));
