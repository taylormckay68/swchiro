import React from 'react';
import { hydrate } from 'react-dom';
import RoomIdeas from './components/RoomIdeas';

var rooms = document.getElementById('userActiveRooms');
if(rooms && window) hydrate(<RoomIdeas data={window.__LPO__}/>, document.getElementById('userActiveRooms'));
