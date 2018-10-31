import React from 'react';
import { hydrate, render } from 'react-dom';
import Main from './components/Main'
import { Provider } from 'react-redux'
import configureStore from './redux/rootReducer' 

const store = configureStore()

var room = document.getElementById('userActiveRoom');
if(room && window) render(<Provider store={store}><Main data={window.__LPO__}/></Provider>, document.getElementById('userActiveRoom'));
