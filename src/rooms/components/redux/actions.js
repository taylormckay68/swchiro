import types from './types';
import fetch from 'cross-fetch';
import { consolidateStreamedStyles } from 'styled-components';

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
    });

const requestModsData = () => ({
    type: types.REQUEST_MODS_DATA,
    modsData: null,
    error: null,
    isFetching: true
});

const requestModsDataFailure = (error) => ({
    type: types.REQUEST_MODS_DATA_FAILURE,
    modsData: null,
    error,
    isFetching: false
});

export const fetchModsData = (room) => {
    let roomName = room.length ? room.toLowerCase().replace(' ', '-') : '';
    let query = roomName.length ? `&filter=label:${roomName}` : '';
    return (dispatch) => {
        dispatch(requestModsData());
        fetch(`https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=18${query}`)
            .then(response => response.status !== 200 ? Error(response.statusText) : response.json())
            .then(json => {
                let items = json.data ? (json.data.items.length ? json.data.items : []) : {};
                let newData = items.map(e => {
                    return({
                      imageUrl: e.media.large.link, 
                      redirectUrl: `/room?asset_id=${e.id}`
                    })
                  });
                let nextRoomsData = json.paging.next
                dispatch(receiveModsData(newData, nextRoomsData))
            })
            .catch(error => dispatch(requestModsDataFailure(error)))
    }
}

