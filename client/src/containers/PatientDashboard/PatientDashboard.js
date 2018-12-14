/*eslint-disable camelcase*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Concerns from '../Concerns/Concerns';
import * as actions from '../../actions';
import './PatientDashboard.css';

export class PatientDashboard extends Component {
  constructor() {
    super();

    this.state = {
      concernInput: '',
      domain1: false,
      domain2: false,
      domain3: false,
      domain4: false,
      domain5: false,
      domain6: false,
      notesInput: ''
    };
  }

  componentDidMount() {
    this.props.wipeStoreFromPatientDashboard();
  }

  toggleDomain = val => {
    this.state[val] === false
      ? this.setState({ [val]: true })
      : this.setState({ [val]: false });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSave = (concern, d1, d2, d3, d4, d5, d6, notes, id) => {
    this.props.addConcern(id, {
      description: concern,
      domain_1: d1,
      domain_2: d2,
      domain_3: d3,
      domain_4: d4,
      domain_5: d5,
      domain_6: d6,
      notes: notes,
      patient_id: id
    });
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      concernInput: '',
      domain1: false,
      domain2: false,
      domain3: false,
      domain4: false,
      domain5: false,
      domain6: false,
      notesInput: ''
    });
  };

  render() {
    const {
      concernInput,
      domain1,
      domain2,
      domain3,
      domain4,
      domain5,
      domain6,
      notesInput
    } = this.state;

    const { currentPatient } = this.props;

    return (
      <div className="PatientDashboard">
        <div className="pd-header-row">
          <h3 className="pd-first">Primary Concerns</h3>
          <h3 className="pd-second">Domains</h3>
          <h3 className="pd-third">Notes</h3>
        </div>

        <Concerns />

        <div className="pd-input-row">
          <input
            className="primary-concern"
            placeholder="Add Concern"
            value={concernInput}
            onChange={event => this.handleChange(event)}
            name="concernInput"
          />

          <p>
            <span
              onClick={() => this.toggleDomain('domain1')}
              className={
                domain1 === false ? 'domains' : 'domains sam-1 domains-true'
              }
            >
              1
            </span>

            <span
              onClick={() => this.toggleDomain('domain2')}
              className={
                domain2 === false ? 'domains' : 'domains sam-2 domains-true'
              }
            >
              2
            </span>

            <span
              onClick={() => this.toggleDomain('domain3')}
              className={
                domain3 === false ? 'domains' : 'domains sam-3 domains-true'
              }
            >
              3
            </span>

            <span
              onClick={() => this.toggleDomain('domain4')}
              className={
                domain4 === false ? 'domains' : 'domains sam-4 domains-true'
              }
            >
              4
            </span>

            <span
              onClick={() => this.toggleDomain('domain5')}
              className={
                domain5 === false ? 'domains' : 'domains sam-5 domains-true'
              }
            >
              5
            </span>

            <span
              onClick={() => this.toggleDomain('domain6')}
              className={
                domain6 === false ? 'domains' : 'domains sam-6 domains-true'
              }
            >
              6
            </span>
          </p>

          <input
            className="primary-concern-notes"
            value={notesInput}
            placeholder="Add Notes"
            onChange={event => this.handleChange(event)}
            name="notesInput"
          />

          <button
            className="save-primary-concern"
            onClick={() =>
              this.handleSave(
                concernInput,
                domain1,
                domain2,
                domain3,
                domain4,
                domain5,
                domain6,
                notesInput,
                currentPatient.id
              )
            }
          >
            save
          </button>
        </div>

        <div className="sam-holder">
          <img className="sam-image" src="/assets/sam-new.svg" alt="sam-big" />
          <div className="sam-dot-1 sam-dots">1</div>
          <div className="sam-dot-2 sam-dots">2</div>
          <div className="sam-dot-3 sam-dots">3</div>
          <div className="sam-dot-4 sam-dots">4</div>
          <div className="sam-dot-5 sam-dots">5</div>
          <div className="sam-dot-6 sam-dots">6</div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  patientConcerns: store.patientConcerns,
  currentPatient: store.currentPatient
});

export const mapDispatchToProps = dispatch => ({
  addConcern: (patientId, concernObject) => {
    dispatch(actions.addConcern(patientId, concernObject));
  },
  wipeStoreFromPatientDashboard: () => {
    dispatch(actions.wipeStoreFromPatientDashboard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);

PatientDashboard.propTypes = {
  addConcern: PropTypes.func,
  currentPatient: PropTypes.object,
  wipeStoreFromPatientDashboard: PropTypes.func
};
