import React from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import './ComparisonCard.css';

const ComparisonCard = ({ dateArray, title, values }) => {
  const dates = dateArray.map((date, index) => {
    return <p key={index}>{moment(date).format('MMM D')}</p>;
  });

  const dataValues = values.map((value, index) => {
    if (value === false) {
      value = 'no';
    } else if (value === true) {
      value = 'yes';
    } else if (
      value === null ||
      value === 0 ||
      value === undefined ||
      value === ''
    ) {
      value = '-';
    }

    return <p key={index}>{value}</p>;
  });

  return (
    <div className="ComparisonCard">
      <h5>{title}</h5>
      <hr />
      <div className="card-body">
        <div className="card-dates">
          <p>{dates}</p>
        </div>
        <div className="card-values">
          <p>{dataValues}</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;

ComparisonCard.propTypes = {
  dateArray: PropTypes.array,
  title: PropTypes.string,
  values: PropTypes.array
};
