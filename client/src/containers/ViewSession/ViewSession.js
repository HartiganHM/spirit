import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import processProcessesData from '../../helpers/processProcessesData/processProcessesData';
import formatTherapyGoalData from '../../helpers/formatTherapyGoalData/formatTherapyGoalData';
import formatTreatmentPlanData from '../../helpers/formatTreatmentPlanData/formatTreatmentPlanData';
import * as actions from '../../actions';
import { PropTypes } from 'prop-types';
import './ViewSession.css';

export const ViewSession = props => {
  window.scrollTo(0, 0);

  const completeSessionNow = () => {
    props.updateSession(props.selectedSession.id, {
      completed: true
    });
    props.history.push(`/spirit/concerns/${props.selectedConcern.id}/sessions`);
  };

  let date,
    clinic,
    patient,
    ids,
    concern,
    processValues,
    treatmentPlan,
    therapyGoal;

  if (props.selectedSession.id) {
    patient = <h2>Patient: {props.currentPatient.abstracted_name}</h2>;
    date = <h4>{moment(props.selectedSession.created_at).format('LL')}</h4>;
    clinic = <h4>Clinic: {props.currentPatient.clinic_name}</h4>;
    ids = (
      <h4>
        Concern ID: {props.selectedSession.concern_id}, Session ID:{' '}
        {props.selectedSession.id}
      </h4>
    );
    concern = (
      <div className="view-concern">
        <p className="view-concern-description">
          {props.selectedConcern.description}
        </p>
        <p
          className={
            props.selectedConcern.domain_1
              ? 'view-dots'
              : 'view-dots opacity-zero'
          }
        >
          1
        </p>
        <p
          className={
            props.selectedConcern.domain_2
              ? 'view-dots'
              : 'view-dots opacity-zero'
          }
        >
          2
        </p>
        <p
          className={
            props.selectedConcern.domain_3
              ? 'view-dots'
              : 'view-dots opacity-zero'
          }
        >
          3
        </p>
        <p
          className={
            props.selectedConcern.domain_4
              ? 'view-dots'
              : 'view-dots opacity-zero'
          }
        >
          4
        </p>
        <p
          className={
            props.selectedConcern.domain_5
              ? 'view-dots'
              : 'view-dots opacity-zero'
          }
        >
          5
        </p>
        <p
          className={
            props.selectedConcern.domain_6
              ? 'view-dots'
              : 'view-dots opacity-zero'
          }
        >
          6
        </p>
        <p className="view-concern-notes">{props.selectedConcern.notes}</p>
      </div>
    );
    processValues = processProcessesData([props.selectedProcess], true);
    treatmentPlan = formatTreatmentPlanData([props.selectedTreatmentPlan]);
    therapyGoal = formatTherapyGoalData([props.selectedTherapyGoal]);

    treatmentPlan = treatmentPlan.map((object, index) => {
      if (object.value !== null && object.dbName !== 'created_at') {
        return (
          <div key={index} className="treatment-plan-text">
            <p className="text-small-2">{object.title}: </p>
            <p>{object.value}</p>
          </div>
        );
      }
    });
    therapyGoal = therapyGoal.map((object, index) => {
      if (
        object.value !== null &&
        object.dbName !== 'created_at' &&
        object.dbName.split('_')[object.dbName.split('_').length - 1] !== 'goal'
      ) {
        return (
          <div key={index} className="data-holder">
            <p className="text-small text-small-3">{object.title}: </p>
            <p>{object.value}</p>
          </div>
        );
      } else if (
        object.value !== null &&
        object.dbName !== 'created_at' &&
        object.dbName.split('_')[object.dbName.split('_').length - 1] === 'goal'
      ) {
        return (
          <div key={index} className="data-holder-wide">
            <p className="text-small-wide">{object.title}: </p>
            <p>{object.value}</p>
          </div>
        );
      }
    });
  }

  let renderCompleteButton;

  if (props.selectedSession.completed === false) {
    renderCompleteButton = (
      <button
        className="complete-session-button"
        onClick={() => completeSessionNow()}
      >
        COMPLETE SESSION
      </button>
    );
  }

  return (
    <div className="ViewSession">
      <div className="view-button-holder">
        <div className="print-button-container">
          <a href="javascript:window.print()" className="print-button">
            <img className="print-image" src="/assets/print.svg" />
          </a>
        </div>
        {renderCompleteButton}
      </div>

      <div className="view-header-top">
        <div className="view-header-left">
          <div className="view-patient">{patient}</div>
          <div className="view-ids">{ids}</div>
        </div>

        <div className="view-header-center">
          <img className="view-sam-image" src="/assets/sam-new-plain.svg" />
        </div>

        <div className="view-header-right">
          <div className="view-date">{date}</div>
          <div className="view-clinic">{clinic}</div>
        </div>
      </div>

      <div>
        <h3>Primary Concern</h3>
        {concern}
      </div>

      <div className="view-processes">
        <h3>Processes</h3>
        {Object.keys(processValues).map((value, index) => (
          <div key={`${value}-${index}`} className="view-section-container">
            <h4 className="view-processes-title">{value}</h4>
            <div className="view-processes-section">
              {processValues[value].map((object, index) => (
                <div key={index} className="data-holder">
                  <p className="text-small">{object.title}: </p>
                  <p>{object.values[0]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="view-section-container">
        <h3>Treatment Plans</h3>
        <div className="view-treatment">{treatmentPlan}</div>
      </div>

      <div className="view-section-container">
        <h3>Therapy Goals</h3>
        <div className="view-therapy">{therapyGoal}</div>
      </div>

      <div className="view-button-holder">
        <div className="print-button-container">
          <a href="javascript:window.print()" className="print-button">
            <img className="print-image" src="/assets/print.svg" />
          </a>
        </div>

        {renderCompleteButton}
      </div>
    </div>
  );
};

export const mapStateToProps = store => ({
  currentPatient: store.currentPatient,
  selectedConcern: store.selectedConcern,
  selectedSession: store.selectedSession,
  selectedProcess: store.selectedProcess,
  selectedTherapyGoal: store.selectedTherapyGoal,
  selectedTreatmentPlan: store.selectedTreatmentPlan
});

export const mapDispatchToProps = dispatch => ({
  updateSession: (sessionId, status) => {
    dispatch(actions.updateSession(sessionId, status));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewSession);

ViewSession.propTypes = {
  currentPatient: PropTypes.object,
  selectedConcern: PropTypes.object,
  selectedSession: PropTypes.object,
  selectedProcess: PropTypes.object,
  selectedTherapyGoal: PropTypes.object,
  selectedTreatmentPlan: PropTypes.object,
  updateSession: PropTypes.func,
  history: PropTypes.object
};
