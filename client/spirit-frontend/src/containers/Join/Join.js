/*eslint-disable react/no-unescaped-entities*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import InstructionWrapper from '../../components/InstructionWrapper/InstructionWrapper';

import { PropTypes } from 'prop-types';
import { joinClinic } from '../../language/language';
import * as actions from '../../actions';
import './Join.css';

export class Join extends Component {
  constructor() {
    super();

    this.state = {
      currentClinicPasscode: '',
      clinicPasscode: '',
      error: '',
      success: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  joinClinic = async (event, passcode) => {
    event.preventDefault();
    const { joinExistingClinic, user } = this.props;
    let error;
    let success;

    if (passcode.length !== 8) {
      success = '';
      error = 'A clinic passcode must be exactly eight characters in length';
      this.setState({ error, success });
      return;
    }

    const joinMessage = await joinExistingClinic(
      { passcode: passcode },
      user.id
    );

    if (joinMessage === 'Passcode does not match any existing clinics') {
      success = '';
      error = `No clinic found. Please check the passcode or contact your clinic administrator`;
      this.setState({ error, success });
      return;
    } else if (user.clinic === joinMessage.clinic) {
      error = '';
      success = `You are already a member of ${user.clinic}.`;
      this.setState({ error, success });
    } else {
      const newClinicName = joinMessage.clinic;

      error = '';
      success = `You have successfully joined ${newClinicName}!`;
      this.setState({ error, success });
    }
  };

  render() {
    const { clinicPasscode, error, success } = this.state;
    const { user } = this.props;

    return (
      <div className="Join">
        <h3>Join a Clinic</h3>

        <InstructionWrapper>
          <div className={`instructions`}>{joinClinic.directions1}</div>

          <div className={`instructions`}>{joinClinic.directions2}</div>
        </InstructionWrapper>

        <form>
          <input
            className="input-password"
            onChange={event => this.handleChange(event)}
            value={clinicPasscode}
            name="clinicPasscode"
            placeholder="Enter Passcode"
            maxLength={8}
          />

          <button
            className="submit-button"
            type="submit"
            onClick={event => this.joinClinic(event, clinicPasscode)}
          >
            SUBMIT
          </button>
        </form>

        {error && <span className="error-message">{error}</span>}

        {success && <span className="success-message">{success}</span>}

        <NavLink className="join-link" to={`/spirit/users/${user.id}/create`}>
          CREATE NEW CLINIC
        </NavLink>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  joinExistingClinic: async (passcode, userId) => {
    const joinMessage = await dispatch(
      actions.joinExistingClinic(passcode, userId)
    );

    return joinMessage;
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join);

Join.propTypes = {
  joinExistingClinic: PropTypes.func,
  user: PropTypes.object
};
