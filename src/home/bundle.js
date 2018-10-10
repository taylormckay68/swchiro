import React from 'react';
import { hydrate } from 'react-dom';
import Root from './Root';
var home = document.getElementById('userActiveHome');
if(home && window) hydrate(<Root data={window.__LPO__}/>, document.getElementById('userActiveHome'));
