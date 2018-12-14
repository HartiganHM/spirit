/*eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import InstructionWrapper from '../../components/InstructionWrapper/InstructionWrapper';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import generator from 'generate-password';
import { createClinic } from '../../language/language';
import './Create.css';

export class Create extends Component {
  state = {
    clinicName: '',
    clinicAbbreviation: '',
    successMessage: '',
    error: '',
    success: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveNewClinic = (event, name, abbreviation) => {
    event.preventDefault();
    const { saveClinic, user } = this.props;
    const { clinicName, clinicAbbreviation } = this.state;

    let error;
    let success;

    if (!clinicName || !clinicAbbreviation) {
      success = '';
      error = createClinic.clinicNameError;
      this.setState({ error, success });
      return;
    } else if (clinicAbbreviation.length !== 3) {
      success = '';
      error = createClinic.clinicAbbreviationError;
      this.setState({ error, success });
      return;
    }

    const passcode = generator.generate({
      length: 8,
      uppercase: false,
      numbers: true,
      excludeSimilarCharacters: true
    });

    error = '';
    success = createClinic.addClinicSuccess(passcode);
    this.setState({ error, success, clinicName: '', clinicAbbreviation: '' });
    saveClinic({ name, abbreviation, passcode }, user.id);
  };

  displayClinic = () => {
    const { user } = this.props;

    return (
      <div>
        <h3 className="current-clinic-header">{createClinic.currentClinic}</h3>
        <h4>
          <span className="clinic-span">{createClinic.memberOfClinic}</span>
          {user.clinic}
        </h4>
        <h4>
          <span className="clinic-span">{createClinic.clinicAbbreviation}</span>
          {user.clinic_abbreviation}
        </h4>
        <h4>
          <span className="clinic-span">{createClinic.clinicPasscode}</span>
          {user.clinic_passcode}
        </h4>
      </div>
    );
  };

  render() {
    const { clinicName, clinicAbbreviation, error, success } = this.state;
    const { user } = this.props;

    return (
      <div className="Create">
        {user.clinic && this.displayClinic()}

        <h3>Add a New Clinic</h3>

        <InstructionWrapper>
          <div className={`instructions`}>{createClinic.addDirections1}</div>
          <div className={`instructions`}>{createClinic.addDirections2}</div>
        </InstructionWrapper>

        <form className="new-clinic-form">
          <input
            className="input-clinic-name"
            onChange={event => this.handleChange(event)}
            value={clinicName}
            name="clinicName"
            placeholder={createClinic.newClinicPlaceholder}
            maxLength={30}
          />

          <input
            className="input-abbreviation"
            onChange={event => this.handleChange(event)}
            value={clinicAbbreviation}
            name="clinicAbbreviation"
            placeholder={createClinic.clinicAbbreviationPlaceholder}
            maxLength={3}
          />

          <button
            className="submit-button"
            type="submit"
            onClick={event =>
              this.saveNewClinic(event, clinicName, clinicAbbreviation)
            }
          >
            {createClinic.submitClinic}
          </button>
        </form>

        {error && <span className="error-message">{error}</span>}

        {success && <span className="success-message">{success}</span>}

        <NavLink className="join-link" to={`/spirit/users/${user.id}/join`}>
          {createClinic.joinClinic}
        </NavLink>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  saveClinic: (clinic, userId) => {
    dispatch(actions.saveClinic(clinic, userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);

Create.propTypes = {
  saveClinic: PropTypes.func,
  user: PropTypes.object
};
