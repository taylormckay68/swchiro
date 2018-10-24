import types from './types';
import fetch from 'cross-fetch';

export const test = () => ({
    test1: 'test',
    type: types.TEST
})

//mod actions
const receiveModsData = (modsData) => ({
        type: types.RECEIVE_MODS_DATA,
        modsData,
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
        fetch(`https://api-2.curalate.com/v1/media/gFNSZQbGWhQpNfaK?sort=Optimized&limit=50${query}`)
            .then(response => response.status !== 200 ? Error(response.statusText) : response.json())
            .then(json => dispatch(receiveModsData(json.data.items)))
            .catch(error => dispatch(requestModsDataFailure(error)))
    }
}