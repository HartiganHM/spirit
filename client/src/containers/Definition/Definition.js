/*eslint-disable no-useless-escape*/

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Definition.css';

export const Definition = props => {
  let relevantDefinitions = [];
  let display;
  const firstWord = new RegExp(/^([\w\-]+)/);

  if (props.definitions.length) {
    props.definitions.forEach(def => {
      if (def.term.toLowerCase() === props.title.toLowerCase()) {
        relevantDefinitions.push(def);
      }
    });

    if (!relevantDefinitions.length) {
      relevantDefinitions = props.definitions.filter(def => {
        return (
          def.term.match(firstWord)[0].toLowerCase() ===
          props.title.match(firstWord)[0].toLowerCase()
        );
      });
    }

    if (!relevantDefinitions.length) {
      relevantDefinitions = [{ term: 'No Definitions Found', definition: '' }];
    }

    display = relevantDefinitions.map((def, index) => {
      return (
        <div key={index}>
          <h5 className="definition-title">{def.term}</h5>
          <p className="definition-body">{def.definition}</p>
          <hr />
        </div>
      );
    });
  }

  return <div className="Definition">{display}</div>;
};

export const mapStateToProps = store => ({
  definitions: store.definitions
});

export default connect(mapStateToProps, null)(Definition);

Definition.propTypes = {
  definitions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string
};
