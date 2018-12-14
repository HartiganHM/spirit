import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './SessionTabs.css';

export const SessionTabs = props => {
  const {
    storedThreadConnections,
    selectedSession,
    updateThreadDomain
  } = props;

  const navNames = [
    'sam',
    'modulation',
    'postural',
    'sensory',
    'social',
    'executive',
    'finish'
  ];

  const navHeader = [
    'SAM',
    'Sensory Modulation',
    'Postural',
    'Sensory Discrimination',
    'Social',
    'Executive',
    'Plans & Goals'
  ];

  const getClass = (domain, route, threadConnection) => {
    const { selectedSession } = props;
    const { pathname } = props.location;

    if (selectedSession.completed) {
      return 'session-tabs';
    }

    if (threadConnection && pathname === route) {
      updateThreadDomain(domain);

      return 'session-tabs';
    } else if (threadConnection) {
      return 'session-tabs thread-connection-tab';
    } else {
      return 'session-tabs';
    }
  };

  const navLinks = navNames.map((link, index) => {
    const sessionId = selectedSession.id;
    const route = `/spirit/sessions/${sessionId}/${link}`;

    return (
      <NavLink
        key={index}
        to={route}
        className={getClass(link, route, storedThreadConnections[link])}
      >
        <h2>{navHeader[index]}</h2>
      </NavLink>
    );
  });

  return <div className="SessionTabs">{navLinks}</div>;
};

export const mapStateToProps = store => ({
  storedThreadConnections: store.storedThreadConnections,
  selectedSession: store.selectedSession
});

export const mapDispatchToProps = dispatch => ({
  updateThreadDomain: domain => {
    dispatch(actions.updateThreadDomain(domain));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionTabs);

SessionTabs.propTypes = {
  storedThreadConnections: PropTypes.object,
  selectedSession: PropTypes.object,
  updateThreadDomain: PropTypes.func,
  location: PropTypes.object
};
