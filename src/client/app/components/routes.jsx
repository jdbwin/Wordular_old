import React, {Component} from 'react';
import {Link, Router, Route, DefaultRoute} from 'react-router'
import App from '../containers/App.js'
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp.jsx'
import Home from '../components/sections/Home.js'

export default class Routes extends Component {

  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <DefaultRoute path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/home" component={Home}/>
        </Route>
      </Router>
    )
  }

}
