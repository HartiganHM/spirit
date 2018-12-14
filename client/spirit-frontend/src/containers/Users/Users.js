import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Users.css';

export const Users = props => {
  if (props.user.id) {
    const userId = props.user.id;
    props.history.push(`/spirit/users/${userId}/`);
  }

  return <div />;
};

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(mapStateToProps, null)(Users);

Users.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object
};
