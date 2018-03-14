import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise'

const finalCreateStore = compose(
  applyMiddleware(logger, promise)
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
};