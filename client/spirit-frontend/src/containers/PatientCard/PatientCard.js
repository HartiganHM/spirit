import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './PatientCard.css';

export const PatientCard = props => {
  const { abstractedName, lastAppt, id } = props;

  return (
    <div className="PatientCard">
      <p>
        <span>Patient Id: </span>
        {abstractedName}{' '}
      </p>

      <p>
        <span>Last update: </span>
        {lastAppt}
      </p>

      <Link
        onClick={() => props.getPatientConcerns(id)}
        to={`/spirit/patients/${id}`}
      >
        SELECT
      </Link>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  getPatientConcerns: id => {
    dispatch(actions.getPatientConcerns(id));
  }
});

export default connect(null, mapDispatchToProps)(PatientCard);

PatientCard.propTypes = {
  abstractedName: PropTypes.string,
  lastAppt: PropTypes.string,
  id: PropTypes.number,
  getPatientConcerns: PropTypes.func
};
