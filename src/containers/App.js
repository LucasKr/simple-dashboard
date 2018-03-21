import React, { Component } from 'react';

import Dashboard from '../components/Dashboard';
import { Route, Redirect } from "react-router-dom";

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title is-1">Data analytics for Fatal diseases</h1>
        <div className="ContainerApp"> 
          <Route exact path="/" component={() => (<Redirect to={{ pathname:'/dashboard' }} />)} /> 
          <Route path="/dashboard" component={Dashboard} />  
        </div>
      </div>
    );
  }
}

export default App;