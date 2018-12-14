import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import PatientCard from '../PatientCard/PatientCard';
import moment from 'moment';
import './PatientList.css';

export const PatientList = props => {
  let patientListDisplay;

  if (props.patientList.length) {
    patientListDisplay = props.patientList.map(patient => {
      return (
        <PatientCard
          key={patient.id}
          id={patient.id}
          abstractedName={patient.abstracted_name}
          lastAppt={moment(patient.updated_at).format('ll')}
        />
      );
    });
  }

  return <div className="PatientList">{patientListDisplay}</div>;
};

export const mapStateToProps = store => ({
  patientList: store.patientList
});

export default connect(mapStateToProps, null)(PatientList);

PatientList.propTypes = {
  patientList: PropTypes.array
};
