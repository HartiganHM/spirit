import React from 'react';
import { PropTypes } from 'prop-types';
import SliderTen from '../../containers/SliderTen/SliderTen';
import './SessionHeader.css';

const SessionHeader = ({ title, headings, databaseNamesArray }) => {
  const headingsDisplay = headings.map((heading, index) => {
    return (
      <div key={index} className="slider-holder">
        <SliderTen
          sliderTitle={heading}
          databaseName={databaseNamesArray[index]}
        />
      </div>
    );
  });

  return (
    <div className="SessionHeader">
      <h2 className="session-title">{title}</h2>
      <div className="session-header-container">
        {headingsDisplay}
      </div>
    </div>
  );
};

export default SessionHeader;

SessionHeader.propTypes = {
  title: PropTypes.string,
  headings: PropTypes.array,
  databaseNamesArray: PropTypes.array
};
