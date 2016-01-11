import React, {Component} from 'react';
import {render} from 'react-dom';
import Reqwest from 'reqwest';
import ResultBank from './ResultBank.jsx';
var baseURL = 'http://api.wordnik.com/v4/word.json/';
var options = '/definitions?limit=20&includeRelated=false&useCanonical=false&includeTags=false';
var apiKey = '&api_key=b4186993a7a9976db800a0374da09857359ccdc28623233c9';

export default class SearchBox extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      search: '',
      data: []
    }
  }

  handleSearchChange(e) {

    if (e.target.value.length < 1) {
      this.setState({search: ''})
    } else {
      this.setState({search: e.target.value});
    }

  }

  runSearch(e) {

    if(e.keyCode == '8' && this.state.search.length < 1) {
      this.setState({data: []})
    } else {
      this.queryAPI()
    }

  }

  queryAPI() {
    var search = this.state.search.trim();

    if(search.length > 0) {
      Reqwest({
        url: baseURL + search + options + apiKey,
        type: 'jsonp',
        success: results => this.setState({data: results}),
        error: error => console.log(error)
        })
      }
    }

  render() {

    return (

      <aside className="search">
        <section>
          <h2>Search for a Word</h2>
          <input
            id="word-search"
            type="text"
            value={this.state.search}
            placeholder="Search here"
            onChange={this.handleSearchChange.bind(this)}
            onKeyUp={this.runSearch.bind(this)}
          />
          <ResultBank 
            data={this.state.data} 
            saveNewWord={this.props.saveNewWord} 
            apiToken={this.props.apiToken}
          />
          <a className="close" onClick={this.props.onClose}>
            <i className="fa fa-times" />
          </a>
        </section>
      </aside>

    )
  }

}
