import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './PatientHeader.css';
// import moment from 'moment';

export const PatientHeader = props => {
  let display;

  if (props.currentPatient.id !== undefined) {
    const patientDisplay = props.currentPatient.abstracted_name;
    // const sinceDisplay = moment(props.currentPatient.created_at).format('LL')
    display = (
      <div className="patient-header-holder">
        <h4>
          PATIENT:<span className="patient-header-span">{patientDisplay}</span>
        </h4>
      </div>
    );
  }

  return <div className="PatientHeader">{display}</div>;
};

export const mapStateToProps = store => ({
  currentPatient: store.currentPatient
});

export default connect(mapStateToProps, null)(PatientHeader);

PatientHeader.propTypes = {
  currentPatient: PropTypes.object
};
