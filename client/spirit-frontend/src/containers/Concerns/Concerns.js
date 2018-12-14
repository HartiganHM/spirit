import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ConcernRow from '../ConcernRow/ConcernRow';

export const Concerns = props => {
  let displayConcernRows;

  if (props.patientConcerns.length) {
    displayConcernRows = props.patientConcerns.map((concern, index) => {
      return (
        <ConcernRow
          id={concern.id}
          concern={concern.description}
          d1={concern.domain_1}
          d2={concern.domain_2}
          d3={concern.domain_3}
          d4={concern.domain_4}
          d5={concern.domain_5}
          d6={concern.domain_6}
          notes={concern.notes}
          key={index}
        />
      );
    });
  }

  return <div>{displayConcernRows}</div>;
};

export const mapStateToProps = store => ({
  patientConcerns: store.patientConcerns
});

export default connect(mapStateToProps, null)(Concerns);

Concerns.propTypes = {
  patientConcerns: PropTypes.array
};
