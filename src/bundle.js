import React from 'react'
import { hydrate } from 'react-dom'
import Main from './Main';
import {BrowserRouter} from 'react-router-dom';

var main = document.getElementById('bd')
if (main && window)
  hydrate(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    document.getElementById('bd')
  )
