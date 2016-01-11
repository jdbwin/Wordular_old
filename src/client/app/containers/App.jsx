import '../styles/styles.css';
import React, { Component, PropTypes } from 'react'
import {Link, Router, Route, History} from 'react-router'
import {createHistory, useBasename} from 'history'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WordActions from '../actions/actions'
import Home from '../components/sections/Home.jsx'
import Login from '../components/Login.jsx'
import Signup from '../components/SignUp.jsx'

const RaisedButton = require('material-ui/lib/raised-button')

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      signIn: true,
      signUp: false,
      apiToken: 0
    }

    this.toggleSignIn = this.toggleSignIn.bind(this)
    this.toggleSignUp = this.toggleSignUp.bind(this)

    this.handleSignIn = this.handleSignIn.bind(this)
  }

  componentWillMount() {
    this.setState({loggedIn: localStorage.loggedIn})
    this.setState({apiToken: localStorage.apiToken})
  }

  componentDidUpdate() {
    localStorage.setItem('loggedIn', this.state.loggedIn)
    localStorage.setItem('apiToken', this.state.apiToken)
  }

  toggleSignIn() {
    if(this.state.signUp) {
      this.setState({signUp: !this.state.signUp})
    }
    this.setState({signIn: true})
  }

  toggleSignUp() {
    if(this.state.signIn) {
      this.setState({signIn: !this.state.signIn})
    }
    this.setState({signUp: true})
  }

  handleSignIn(response) {
    if(response){ 
      this.setState({apiToken: response.access_token})
      this.setState({loggedIn: true})
    }
  }

  handleChange(e) {
    switch(e.target.name) {
      case 'email':
        this.setState({email: e.target.value})
        break
      case 'password':
        this.setState({password: e.target.value})
        break
      default:
        break
    }
  }

  render() {
    var partial;
    if (this.state.loggedIn == true || this.state.loggedIn == 'true') {
      partial = 
        <Home user={this.state.currentUser} apiToken={this.state.apiToken} />
    } else {
      partial = 

        <section className='splash'>

          <h1>Wordular</h1>
          <h2>Save all your favourite words in one place </h2>

          <div className="splash-buttons">
            <div className="sign-in">
              <RaisedButton 
                label="Sign In" 
                primary={true} 
                onClick={this.toggleSignIn} />
            </div>
            <div className="sign-up">
              <RaisedButton 
                label="Sign Up" 
                primary={true} 
                onClick={this.toggleSignUp} />
            </div>
          </div>

          {this.state.signIn ? <Login signIn={this.handleSignIn} /> :true}
          {this.state.signUp ? <Signup /> :false}

        </section>

    }
    return (
      <div className='container'>
        {partial}
      </div>
    )
  }
}


//App.propTypes = {
//  words: PropTypes.array.isRequired,
//  actions: PropTypes.object.isRequired
//}

//function mapStateToProps(state) {
//
//  return {
//    words: state.words
//  }
//
//}
//
//function mapDispatchToProps(dispatch) {
//
//  return {
//    actions: bindActionCreators(WordActions, dispatch)
//  }
//
//}
//

//  mapStateToProps,
//  mapDispatchToProps
//)(App)
