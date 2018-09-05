import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './../redux/index';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
}
