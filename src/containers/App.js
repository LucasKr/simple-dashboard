import React, { Component } from 'react';

import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Icon from 'react-fontawesome';

import { connect } from 'react-redux';
import { Route, Link, withRouter } from "react-router-dom";

import '../styles/App.css';


const Menu = () => (
  <div className="MenuApp"> 
    <Link className="MenuItem" to="/">
      <Icon name="home"/>
      Home
    </Link>
    <Link className="MenuItem" to="/dashboard">
      <Icon name="area-chart"/>
      Dashboard
    </Link>
  </div>
);

class App extends Component {

  renderHomePage = () => (<Home app={this.props.app}/>);

  renderDashboardPage = () => (<Dashboard />);

  render() {
    return (
      <div className="App">
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
  return { app : state.app }
}

export default withRouter(connect(mapStateToProps)(App));