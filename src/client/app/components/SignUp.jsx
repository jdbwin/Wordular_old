import React, {Component} from 'react'
import {render} from 'react-dom'
import Reqwest from 'reqwest'

const TextField = require('material-ui/lib/text-field')
const FlatButton = require('material-ui/lib/flat-button')

export default class SignUp extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      name: ''
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
        //      case 'password_confirmation':
        //        this.setState({password_confirmation: e.target.value})
        //        break
      case 'name':
        this.setState({name: e.target.value})
        break
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.queryAPI()
  }

  queryAPI() {
    Reqwest({
      url: 'http://localhost:3000/api/v1/users',
      type: 'json',
      method: 'post',
      data: {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      },
      success: results => console.log('success'),
      error: results => console.log(results)

    })
  }

  render() {
    var email = this.state.email;
    var password = this.state.password;
    var name = this.state.name;
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
          <TextField
            name="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={this.handleChange.bind(this)}
          />
        </li>
          <li>
          <FlatButton
            label="Submit"
            type="submit"
            onClick={this.handleSubmit.bind(this)}
            secondary={true}
          />
        </li>
      </ul>
      </div>
    )
  }
}

