import React from 'react';
import Result from './Result.jsx';
import Reqwest from 'reqwest';

export default class ResultBank extends React.Component {

  constructor() {
    super();

    this.state = {
      word: '',
      definitions: []
    };

    this.handleDefinitions = this.handleDefinitions.bind(this);

  };

  handleDefinitions(entries) {
    var definitions = [];

    entries.forEach(function(entry) {
      definitions.push([entry.text, entry.partOfSpeech]);
    });

    return definitions;
  };

  handleSave() {
    var saveNewWord = this.props.saveNewWord;
    var apiToken = this.props.apiToken;

    Reqwest({
      url: 'http://localhost:3000/api/v1/words',
      type: 'json',
      method: 'post',
      data: {
        word: this.props.data[0].word,
        definitions: this.handleDefinitions(this.props.data)
      },
      headers: {'Authorization': apiToken},
      success: function() {saveNewWord(this.data)},
      error: error => console.log(url, error['response'])
    });
  };

  render() {
    let results;

    if (this.props.data.length > 0) {
      var saveNewWord = this.props.saveNewWord;
      var apiToken = this.props.apiToken;
      var word = this.props.data[0].word;
      var definitions = this.handleDefinitions(this.props.data);

      results = definitions.map(result => (
          <Result
            partOfSpeech={result[1]}
            definition={result[0]}
          />
      ));
    };

    return (
      <div>
        <ul className="result-bank">
          <h1> {word} </h1>
          {results && <button
            className="save"
            
            onClick={this.handleSave.bind(this)}>
            <i className="fa fa-database" /> Save
          </button>}
          {results}
        </ul>
      </div>
    );

  };

};
