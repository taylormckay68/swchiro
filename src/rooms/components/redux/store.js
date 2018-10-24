import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './rootReducer';

export default function configureStore() {
    return createStore(
        reducer,
        applyMiddleware(thunkMiddleware)
    )
}