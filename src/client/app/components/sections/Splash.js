import React, { Component, PropTypes } from 'react'
import {Router, Route, Link} from 'react-router'

export default class Splash extends Component {

  constructor(props,context) {
    super(props, context)
    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <section>
      <h1>Sign Up</h1>
      <h1>Log In</h1>
      </section>
    )
  }
}
const Users = React.createClass({
  render() {
    return (
      <div>
      <h1>Users</h1>
      <div className="master">
      <ul>
      {this.state.users.map(user => (
        <li key={user.id}><Link to={'/user/${user.id}'}>{user.name}</Link></li>
      ))}
      </ul>
      </div>
      <div className="detail">
      {this.props.children}
      </div>
      </div>
    )
  }
})


