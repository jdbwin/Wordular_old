import React, { Component, PropTypes } from 'react';
import Reqwest from 'reqwest';

import WordBank from '../words/WordBank.jsx';
import PopularWords from '../words/PopularWords.jsx';
import SearchBox from '../search/SearchBox.jsx';

const List = require('material-ui/lib/lists/list')
const ListItem = require('material-ui/lib/lists/list-item')
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');

export default class Home extends Component {

  constructor(props,context) {
    super(props, context);
    this.state = {
      wordBank: [],
      WordBankAll: [],
      showSearch: false,
      showFilters: false,
      showWordBank: true,
      apiToken: 0
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.wordBankQuery = this.wordBankQuery.bind(this);
    this.saveNewWord = this.saveNewWord.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.filterWordBank = this.filterWordBank.bind(this);

  };

  componentWillMount() {
    this.setState({apiToken: this.props.apiToken})
    this.wordBankQuery('GET', this.props.apiToken);
  };

  handleLogOut() {localStorage.clear(); location.reload();};

  toggleSearch() {this.setState({showSearch: !this.state.showSearch})};

  handleResponse(entries) {
    var entryHolder = []
    for(var entry in entries) {
      var row = {}
      row['word'] = entries[entry].word.word
      row['definitions'] = entries[entry].definition.slice(0,10);
      entryHolder.push(row)
    };
    this.setState({wordBankAll: entryHolder});
    this.setState({wordBank: entryHolder});
  };


  saveNewWord(data) {
    this.wordBankQuery();
    //var entryHolder = this.state.wordBank.slice()
    //console.log(data)
    //entryHolder.push(data)
    //this.setState({wordBank: entryHolder })
  };

  filterWordBank(filter) {
    var filteredWordBank = this.state.wordBank.slice();

    function filterEntries(entries, filterType) {
      var results = [];

      entries.forEach(function(entry) {
        entry.definitions.forEach(function(definition) {
          if(definition.part_of_speech.indexOf(filter) > -1) {
            if(results.indexOf(entry) < 0) {
              results.push(entry)
            }
          }
        })
      });
      return results
    };

    filteredWordBank = filterEntries(filteredWordBank, filter);

    this.setState({wordBank: filteredWordBank});

  };

  wordBankQuery(method) {

    Reqwest({
      url: 'http://localhost:3000/api/v1/word_bank_entry',
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': this.props.apiToken},
      success: entries => this.handleResponse(entries),
        error: error => console.log(url, error['reponse'])
    });
  };


  render() {

    return (

      <section className="main">

        <div className="header">

          <RaisedButton
            type="button"
            label="Logout"
            primary={true}
            onClick={this.handleLogOut} 
          />

        <RaisedButton 
          label="Find a word ..." 
          primary={true} 
          onClick={this.toggleSearch} 
        />

    </div>


    <WordBank words={this.state.wordBank} />

    <PopularWords apiToken={this.state.apiToken} />



    <List className="filter-wordbank">

      <ListItem
        primaryText="Filter"
        initiallyOpen={false}
        nestedItems={[

          <ListItem
            primaryText="Clear Filter"
            onClick={() => this.setState({wordBank: this.state.wordBankAll})} />,
              <ListItem
                primaryText="Adjective"
                onClick={() => this.filterWordBank('adjective') } />,
                  <ListItem
                    primaryText="Conjuction"
                    onClick={() => this.filterWordBank('conjunction') } />,
                      <ListItem
                        primaryText="Noun"
                        onClick={() => this.filterWordBank('noun') } />,
                          <ListItem
                            primaryText="Preposition"
                            onClick={() => this.filterWordBank('preposition') } />,
                              <ListItem
                                primaryText="Verb"
                                onClick={() => this.filterWordBank('verb') } />,
        ]}
      />
    </List>

    {this.state.showSearch ?
      <SearchBox saveNewWord={this.saveNewWord} apiToken={this.state.apiToken} onClose={() => this.toggleSearch()} />
      :false}

    </section>

    );
  };

};
