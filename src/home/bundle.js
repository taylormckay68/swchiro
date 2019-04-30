import React from 'react'
import { hydrate } from 'react-dom'
import Main from './components/Main'
// import { Provider } from 'react-redux'
// import configureStore from './components/redux/store'

// let preloadedState = window.__LPO__ ? window.__LPO__ : {}
// let updatedState = {
//   modsData: preloadedState.data,
//   roomsID: preloadedState.room,
//   nextRoomsData: preloadedState.nextData,
//   isFetching: false,
//   isFetchingNext: false,
//   error: null,
//   selectedRoom: preloadedState.room,
//   style: preloadedState.style
// }
// const store = configureStore(updatedState)

var main = document.getElementById('userActiveRooms')
if (main && window)
  hydrate(
      <Main data={window.__DATA__} />,
    document.getElementById('userActiveRooms')
  )
