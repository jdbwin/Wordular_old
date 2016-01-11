import '../styles/style.css';
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WordActions from '../actions/actions'
import Home from '../components/sections/Home'
import Header from '../components/sections/Header.js'
import SideBar from '../components/sections/Sidebar.js'

class App extends Component {

  render() {
    const { words, actions } = this.props

    return (

      <div>
        <Home words={words} actions={actions} />
      </div>

    )
  }
}

//App.propTypes = {
//  words: PropTypes.array.isRequired,
//  actions: PropTypes.object.isRequired
//}

function mapStateToProps(state) {

  return {
    words: state.words
  }

}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(WordActions, dispatch)
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
