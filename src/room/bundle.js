import React from 'react';
import { hydrate, render } from 'react-dom';
import Root from './Root';

var room = document.getElementById('userActiveRoom');
if(room && window) render(<Root data={window.__LPO__}/>, document.getElementById('userActiveRoom'));
