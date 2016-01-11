import React from 'react';
import Definitions from './Definitions.jsx'

const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');

export default class Word extends React.Component {

  handleClick() {
    console.log('cats')
  }

  handleDefinitions(entries) {
    var definitions = [];

    entries.forEach(function(entry) {
      definitions.push([entry.text, entry.partOfSpeech]);
    });

    return definitions;
  };


  render() {
    const [firstDefinition, ...definedOriginally] = this.props.definitions;

    var definitions = definedOriginally.map(definition =>  
      <Definitions
        partOfSpeech={definition.part_of_speech}
        definition={definition.definition}
      />
    );

    return (


      <Card initiallyExpanded={false}>
        <CardHeader 
          title={this.props.word} 
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={"Definitions available: " + (this.props.definitions.length + 1)}
          >
        </CardHeader>
        <CardText expandable={true}>
          {firstDefinition.definition}
          {firstDefinition.definition}
          <h4>Notes</h4>
          <CardText contentEditable={true} placeholder="Add a note for this word..." />
        </CardText>
        <CardText expandable={true}>
          {definitions}
        </CardText>
      </Card>
    )
  }

}
