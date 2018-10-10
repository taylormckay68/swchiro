import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';

var rooms = document.getElementById('userActiveRooms');
if(rooms && window) hydrate(<Root data={window.__LPO__}/>, document.getElementById('userActiveRooms'));
