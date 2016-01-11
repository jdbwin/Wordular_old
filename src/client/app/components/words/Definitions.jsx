import React from 'react';

export default class Definitions extends React.Component {
  render() {
    return (
      <div className="definitions">
        <h3 className="definition-partofspeech">({this.props.partOfSpeech})</h3>
        <p>{this.props.definition}</p>
      </div>
    )
  }
}
