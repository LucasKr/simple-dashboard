import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './state';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(logger, thunk, promise)
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
};