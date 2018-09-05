import types from './types';

const INITIAL_STATE = {
    modsData: [],
    isAddingToCart: false,
    isFetching: false,
    error: null,
    seen: new Set(),
    clicked: new Set(),
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.REQUEST_MODS_DATA:
            return {
                ...state,
                isFetchingMods: action.isFetchingMods
            };
        case types.REQUEST_MODS_DATA_FAILURE:
            return {
                ...state,
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            };
        case types.RECEIVE_MODS_DATA:
            return {
                ...state,
                modsData: action.modsData,
                isFetchingMods: action.isFetchingMods,
                errorMods: action.errorMods
            };
        case types.REQUEST_ADD_TO_CART:
            return {
                ...state,
                isAddingToCart: action.isAddingToCart
            };
        case types.ADD_TO_CLICKED:
            return {
                ...state,
                clicked: new Set([...state.clicked, ...new Set([action.item])])
            };
        case types.ADD_TO_SEEN:
            return {
                ...state,
                seen: new Set([...state.seen, ...new Set([action.item])])
            }
        default:
            return state;
    }
};
