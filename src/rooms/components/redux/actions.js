import types from './types'
import fetch from 'cross-fetch'
import { consolidateStreamedStyles } from 'styled-components'

export const test = () => ({
  test1: 'test',
  type: types.TEST
})

//mod actions
const receiveModsData = (modsData, nextRoomsData) => ({
  type: types.RECEIVE_MODS_DATA,
  modsData,
  nextRoomsData,
  error: null,
  isFetching: false
})

const requestModsData = () => ({
  type: types.REQUEST_MODS_DATA,
  modsData: null,
  error: null,
  isFetching: true
})

const requestModsDataFailure = error => ({
  type: types.REQUEST_MODS_DATA_FAILURE,
  modsData: null,
  error,
  isFetching: false
})

const receiveNextModsData = (modsData, nextRoomsData) => {
  return {
    type: types.RECEIVE_NEXT_MODS_DATA,
    modsData,
    nextRoomsData,
    error: null,
    isFetching: false
  }
}

const requestNextModsData = () => ({
  type: types.REQUEST_NEXT_MODS_DATA,
  modsData: null,
  error: null,
  isFetching: true
})

const requestNextModsDataFailure = error => ({
  type: types.REQUEST_NEXT_MODS_DATA_FAILURE,
  modsData: null,
  error,
  isFetching: false
})

export const fetchModsData = (room, styles) => {
  console.log(styles)
  let roomName = room.length ? room.toLowerCase().replace(' ', '-') : '';
  let styleString = styles
    .map(style => style.toLowerCase().replace(' ', '-'))
    .join('%20or%20label:')
console.log(styleString);
  let styleQuery = roomName
    ? '%20and%20(label:' + styleString + ')'
    : styleString

  let query = roomName || styleQuery ? `&filter=label:${roomName}${styleQuery}` : '';

  console.log(
    'QUERY',
    'https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?requireProduct=true&sort=Optimized&limit=18' +
      query
  )
  return dispatch => {
    dispatch(requestModsData())
    fetch(
      `https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?requireProduct=true&sort=Optimized&limit=18${query}`
    )
      .then(response => {
        return response.status !== 200
          ? Error(response.statusText)
          : response.json()
      })
      .catch(error => {
        return dispatch(requestModsDataFailure(error))
      })
      .then(json => {
        console.log('DATA', json)
        let redirectRoomQuery = roomName ? `&room=${roomName}` : ''
        let items = json.data
          ? json.data.items.length
            ? json.data.items
            : []
          : {}
        let newData = items.map(e => {
          return {
            imageUrl: e.media.large.link,
            redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${
              e.id
            }${redirectRoomQuery}`
          }
        })
        let nextRoomsData = json.paging.next
        dispatch(receiveModsData(newData, nextRoomsData))
      })
      .catch(error => dispatch(requestModsDataFailure(error)))
  }
}
export const fetchNextModsData = (nextUrl, room) => {
  let roomName = room.length ? room.toLowerCase().replace(' ', '-') : ''
  return dispatch => {
    dispatch(requestNextModsData())
    fetch(nextUrl)
      .then(response =>
        response.status !== 200 ? Error(response.statusText) : response.json()
      )
      .then(json => {
        let redirectRoomQuery = roomName ? `&room=${roomName}` : ''
        let items = json.data
          ? json.data.items.length
            ? json.data.items
            : []
          : {}
        let newData = items.map(e => {
          return {
            imageUrl: e.media.large.link,
            redirectUrl: `https://www.overstock.com/welcome?pageId=k8s2498&asset_id=${
              e.id
            }${redirectRoomQuery}`
          }
        })
        let nextRoomsData = json.paging.next
        dispatch(receiveNextModsData(newData, nextRoomsData))
      })
      .catch(error => dispatch(requestNextModsDataFailure(error)))
  }
}
