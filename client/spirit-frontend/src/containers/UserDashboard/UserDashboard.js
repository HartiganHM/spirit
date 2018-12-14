/*eslint-disable react/no-unescaped-entities*/
/*eslint-disable camelcase*/

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import InstructionWrapper from '../../components/InstructionWrapper/InstructionWrapper';
import PatientList from '../PatientList/PatientList';
import { userDashboard } from '../../language/language';
import * as actions from '../../actions';
import './UserDashboard.css';

export class UserDashboard extends Component {
  state = {
    firstInitial: '',
    lastInitial: '',
    error: '',
    success: ''
  };

  componentDidMount() {
    this.props.wipeStoreFromUserDashboard();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.toUpperCase() });
  };

  handleSubmit = () => {
    const { firstInitial, lastInitial } = this.state;
    const { savePatient } = this.props;
    const { id, clinic_abbreviation } = this.props.user;

    let error;
    let success;

    if (!firstInitial || !lastInitial) {
      success = '';
      error = 'Please enter a first and last patient initial';
      this.setState({ error, success });
      return;
    }

    success = 'Patient successfully added!';
    error = '';
    this.setState({ firstInitial: '', lastInitial: '', error, success });

    savePatient(firstInitial, lastInitial, id, clinic_abbreviation);
  };

  render() {
    const { firstInitial, lastInitial, error, success } = this.state;
    const { user, patientList } = this.props;

    const { id, name, clinic } = user;

    return (
      <div className="UserDashboard">
        <div className="user-dashboard-header">
          <h3 className={`user-dashboard-name`}>
            {userDashboard.otDash(name)}
          </h3>

          {clinic && (
            <div>
              <Link className="clinic-link" to={`/spirit/users/${id}/create`}>
                {userDashboard.seeClinic}
              </Link>
            </div>
          )}
        </div>

        <div className="user-dashboard-content">
          {!clinic && (
            <div className={`welcome-wrapper`}>
              <h3>{`${userDashboard.welcome}${name}!`}</h3>
              <p className={`welcome-instructions`}>
                {userDashboard.welcomeDirections1}
              </p>
              <p className={`welcome-instructions`}>
                {userDashboard.welcomeDirections2}
              </p>

              <Link className="clinic-button" to={`/spirit/users/${id}/create`}>
                <button>{userDashboard.addJoinClinic}</button>
              </Link>
            </div>
          )}
          {clinic && (
            <Fragment>
              <h3>{userDashboard.newPatients}</h3>

              <div className="input-holder">
                <input
                  maxLength={1}
                  onChange={event => this.handleChange(event)}
                  value={firstInitial.toUpperCase()}
                  name="firstInitial"
                  placeholder="First Initial"
                />

                <input
                  maxLength={1}
                  onChange={event => this.handleChange(event)}
                  value={lastInitial.toUpperCase()}
                  name="lastInitial"
                  placeholder="Last Initial"
                />

                <button onClick={() => this.handleSubmit()} type="submit">
                  {userDashboard.submit}
                </button>
              </div>
              <h5>{userDashboard.addNewPatientDetails}</h5>

              {error && <span className="error-message">{error}</span>}

              {success && <span className="success-message">{success}</span>}

              <InstructionWrapper>
                <p className={`instructions`}>
                  {userDashboard.patientDirections1}
                </p>

                <p className={`instructions`}>
                  {userDashboard.patientDirections2}
                </p>
              </InstructionWrapper>
            </Fragment>
          )}

          {patientList.length !== 0 && (
            <div>
              <h3 className="current-patients">
                {userDashboard.currentPatients}
              </h3>
              <PatientList />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  user: store.user,
  patientList: store.patientList
});

export const mapDispatchToProps = dispatch => ({
  savePatient: (first, last, user, clinicAbbr) => {
    dispatch(actions.savePatient(first, last, user, clinicAbbr));
  },
  wipeStoreFromUserDashboard: () => {
    dispatch(actions.wipeStoreFromUserDashboard());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);

UserDashboard.propTypes = {
  savePatient: PropTypes.func,
  user: PropTypes.object,
  patientList: PropTypes.array,
  wipeStoreFromUserDashboard: PropTypes.func
};
