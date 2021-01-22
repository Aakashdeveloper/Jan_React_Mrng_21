import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducers/mainReducer';

let store = createStore(reducer,applyMiddleware(logger));

export default store;