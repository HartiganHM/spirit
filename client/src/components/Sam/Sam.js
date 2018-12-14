import React from 'react';
import { Link } from 'react-router-dom';
import './Sam.css';

const domains = [
  'modulation',
  'social',
  'postural',
  'sensory',
  'executive',
  ''
];

const Sam = () => {
  return (
    <div className="Sam">
      <div className="sam-image-holder">
        <img
          className="sam-big-image"
          src="/assets/sam-w-labels.svg"
          alt="sam-diagram"
        />
        {domains.map((domain, index) => {
          const domainNumber = index + 1;

          if (index === domains.length - 1) {
            return (
              <p key={domainNumber} className={`sam-session-dots session-dots-${domainNumber}`}>
                {domainNumber}
              </p>
            );
          }

          return (
            <Link key={domain} to={domain}>
              <p className={`sam-session-dots session-dots-${domainNumber}`}>
                {domainNumber}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="fair-image-holder">
        <img
          className="fair-big-image"
          src="/assets/fair.svg"
          alt="fair-diagram"
        />
      </div>
    </div>
  );
};

export default Sam;
