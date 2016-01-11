import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Link} from 'react-router'
import Reqwest from 'reqwest'
import * as auth from '../components/auth.js'

const TextField = require('material-ui/lib/text-field')
const FlatButton = require('material-ui/lib/flat-button')

export default class Login extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
      loggedIn: false
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

  handleSubmit(e) {
    e.preventDefault();
    this.queryAPI()
  }

  queryAPI() {
    Reqwest({
      url: 'http://localhost:3000/api/v1/login',
      type: 'json',
      method: 'POST',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: resp => this.props.signIn(resp)
    })
  }

render() {
  var email = this.state.email;
  var password = this.state.password;
  return (
    <div className="authentication">
      <ul>
        <li>
        <TextField
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={this.handleChange.bind(this)}
        />
      </li>
        <li>
        <TextField
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={this.handleChange.bind(this)}
        />
      </li>
        <li>
        <FlatButton
          label="Submit"
          type="submit"
          secondary={true}
          onClick={this.handleSubmit.bind(this)}
        />
      </li>
      </ul>
    </div>
    )
  }
}
