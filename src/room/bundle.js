import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';

var room = document.getElementById('userActiveRoom');
if(room && window) hydrate(<Root data={window.__LPO__}/>, document.getElementById('userActiveRoom'));
