import React from 'react';
import { landing } from '../../language/language';
import './Spirit.css';

const Spirit = () => {
  return (
    <div className="Spirit">
      <img
        className="homepage-wordmark"
        src="/assets/Spirit-Homepage-Wordmark-Purple.png"
        alt="Spirit-Wordmark-with-Tagline"
      />
      <h4 className="homepage-brief-descriptor">{landing.descriptor}</h4>
    </div>
  );
};

export default Spirit;
