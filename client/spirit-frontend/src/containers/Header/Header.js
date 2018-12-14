import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import authLogin from '../../helpers/authLogin';
import { PropTypes } from 'prop-types';
import './Header.css';

export const Header = props => {
  const { name, id, clinic } = props.user;

  return (
    <div className="Header">
      <Link to="/spirit/index">
        <img
          className="header-wordmark"
          src="/assets/Spirit-Wordmark-White.png"
          alt="SpIRiT-wordmark"
        />
      </Link>

      {name && (
        <Fragment>
          <Link to={`/spirit/users/${id}`}>
            <h5 className="header-welcome-user">Welcome, {name}!</h5>
          </Link>
          {clinic && <h5 className="header-welcome-clinic">
            {`Clinic: ${clinic}`}
          </h5>}
        </Fragment>
      )}

      {!name && (
        <Fragment>
          <a href={authLogin}>
            <h5 className="login-link">LOGIN</h5>
          </a>
        </Fragment>
      )}
    </div>
  );
};

export const mapStateToProps = store => ({
  user: store.user
});

export default connect(
  mapStateToProps,
  null
)(Header);

Header.propTypes = {
  user: PropTypes.object
};
