import React from 'react';

export default class Result extends React.Component {

  render() {

    return (

      <div>
        <ul className="result">
          <li>
            <span>({this.props.partOfSpeech})</span>
          </li>
          <li>
            <p>{this.props.definition}</p>
          </li>
        </ul>
      </div>

    )
  }

}
