import React from 'react';
import Word from './Word.jsx';

export default class WordBank extends React.Component {

  render() {

    if (this.props.words) {
      var words = this.props.words.map(function(word) {
        return (

          <Word
            word={word.word}
            definitions={word.definitions}
          />

        );

      });
    };

    return (

      <div className="word-bank">
        <ul>
          {words}
        </ul>
      </div>

    );

  };

};
