import { combineReducers } from 'redux';

import Dashboard from './dashboard'; 
import App from './app';

const rootReducer = combineReducers({
    app: App,
    dashboard: Dashboard
});

export default rootReducer;