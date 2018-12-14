import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ComparisonCard from '../../components/ComparisonCard/ComparisonCard';
import './SessionsComparison.css';

export const SessionsComparison = props => {
  let modulationDisplay;
  let posturalDisplay;
  let sensoryDisplay;
  let socialDisplay;
  let executiveDisplay;

  if (Object.keys(props.processesData).length) {
    const dateArray = props.processesData.modulation[0].values;

    modulationDisplay = props.processesData.modulation.map((object, index) => {
      if (index > 0) {
        return (
          <ComparisonCard
            dateArray={dateArray}
            title={object.title}
            values={object.values}
          />
        );
      }
    });

    posturalDisplay = props.processesData.postural.map((object, index) => {
      if (index > 0) {
        return (
          <ComparisonCard
            dateArray={dateArray}
            title={object.title}
            values={object.values}
          />
        );
      }
    });

    sensoryDisplay = props.processesData.sensory.map((object, index) => {
      if (index > 0) {
        return (
          <ComparisonCard
            dateArray={dateArray}
            title={object.title}
            values={object.values}
          />
        );
      }
    });

    socialDisplay = props.processesData.social.map((object, index) => {
      if (index > 0) {
        return (
          <ComparisonCard
            dateArray={dateArray}
            title={object.title}
            values={object.values}
          />
        );
      }
    });

    executiveDisplay = props.processesData.executive.map((object, index) => {
      if (index > 0) {
        return (
          <ComparisonCard
            dateArray={dateArray}
            title={object.title}
            values={object.values}
          />
        );
      }
    });
  }

  return (
    <div className="SessionsComparison">
      <h3>Sessions Comparison</h3>

      <h4>Modulation</h4>
      <div className="comparison-section-holder">{modulationDisplay}</div>

      <h4>Postural</h4>
      <div className="comparison-section-holder">{posturalDisplay}</div>

      <h4>Sensory</h4>
      <div className="comparison-section-holder">{sensoryDisplay}</div>

      <h4>Social</h4>
      <div className="comparison-section-holder">{socialDisplay}</div>

      <h4>Executive</h4>
      <div className="comparison-section-holder">{executiveDisplay}</div>
    </div>
  );
};

export const mapStateToProps = store => ({
  processesData: store.processesData
});

export default connect(mapStateToProps, null)(SessionsComparison);

SessionsComparison.propTypes = {
  processesData: PropTypes.object
};
