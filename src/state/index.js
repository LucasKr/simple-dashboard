import { combineReducers } from 'redux';

import { reducer as Dashboard } from './dashboard'; 
import { reducer as App } from './app';

const rootReducer = combineReducers({
    app: App,
    dashboard: Dashboard
});

export default rootReducer;