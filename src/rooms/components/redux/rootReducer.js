import types from './types';


const initialState = {}

export default (state=initialState, action) => {
    switch(action.type) {
        case types.TEST:
            return{
                ...state,
                test1: action.test1
            }
        case types.REQUEST_MODS_DATA:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case types.RECEIVE_MODS_DATA:
            return{
                ...state,
                modsData: action.modsData,
                isFetching: action.isFetching,
                errorMods: action.error,
                nextRoomsData: action.nextRoomsData
            }
        default: 
            return state;
    }
}

