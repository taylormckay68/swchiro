import React from 'react';
import { hydrate, render } from 'react-dom';
import Root from './Root';
var home = document.getElementById('userActiveHome');
if(home && window) render(<Root data={window.__LPO__}/>, document.getElementById('userActiveHome'));
