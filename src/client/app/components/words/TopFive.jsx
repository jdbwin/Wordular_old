import React, { Component, PropTypes } from 'react';

export default class TopFive extends Component {
  render() {
    return(
      <tbody>
      <tr>
        <td>{this.props.rank}</td> 
        <td>{this.props.word}</td>
      </tr>
    </tbody>
    )
  }
}
