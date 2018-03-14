import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import App from './containers/App';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import './styles/index.css';
import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';

const store = configureStore();

ReactDOM.render(
    (<Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>
  ), document.getElementById('app-container'));

registerServiceWorker();
