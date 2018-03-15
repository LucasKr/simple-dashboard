import React, { Component } from 'react';

import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Menu from '../components/Menu';

import { connect } from 'react-redux';
import { Route, withRouter } from "react-router-dom";

import '../styles/App.css';

class App extends Component {

  renderHomePage = () => (<Home app={this.props.app} dashboard={this.props.dashboard} />);

  renderDashboardPage = () => (<Dashboard dashboard={this.props.dashboard} />);

  render() {
    return (
      <div className="App">
        <h1 className="title is-1">Data analytics for Fatal diseases</h1>
        <Menu />
        <div className="ContainerApp"> 
          <Route exact path="/" component={this.renderHomePage} /> 
          <Route path="/dashboard" component={this.renderDashboardPage} />  
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    app : state.app,
    dashboard: state.dashboard 
  }
}

export default withRouter(connect(mapStateToProps)(App));