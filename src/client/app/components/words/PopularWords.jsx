import React, { Component, PropTypes } from 'react';
import Reqwest from 'reqwest';

import TopFive from './TopFive.jsx';

export default class PopularWords extends Component {

  constructor() {
    super()

    this.state = {
      topFive: []
    }
  }

  componentWillMount() {
    this.wordBankQuery();
  }


  wordBankQuery() {

    Reqwest({
      url: 'http://localhost:3000/api/v1/words/popular_words',
      type: 'json',
      method: 'GET',
      contentType: 'application/json',
      headers: {'Authorization': this.props.apiToken},
      success: response => this.setState({topFive: response}),
        error: error => console.log(url, error['reponse'])
    });
  };

  render() {

    var topWords = this.state.topFive.map(function(word) {
      return (
        <TopFive
          rank={word[1]}
          word={word[0]}
        />
      )
    });



    return (
        <table className="top-five">
          <thead>
          <tr>
            <th>Number of Entries</th>
            <th>Word</th>
          </tr>
        </thead>
          {topWords}
        </table>
    )
  }
}
