import React from 'react'
import { hydrate } from 'react-dom'
import Main from './components/Main'

var main = document.getElementById('bd')
if (main && window)
  hydrate(
      <Main data={window.__DATA__} />,
    document.getElementById('bd')
  )
