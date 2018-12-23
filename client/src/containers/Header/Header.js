import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import authLogin from '../../helpers/authLogin';
import logoutUser from '../../helpers/logoutUser/logoutUser';
import * as actions from '../../actions';
import { PropTypes } from 'prop-types';
import './Header.css';

export class Header extends Component {
  state = {
    isMenuShown: false
  };

  handleToggleMenu = () => {
    const { isMenuShown } = this.state;

    this.setState({ isMenuShown: !isMenuShown });
  };

  handleLogout = async () => {
    const { history, clearCurrentUser } = this.props;

    this.handleToggleMenu();
    await logoutUser();
    await clearCurrentUser();

    history.push('/spirit/index');
  };

  render() {
    const { isMenuShown } = this.state;
    const { name, id } = this.props.user;

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
            <div
              className={`nav-icon ${isMenuShown ? 'close' : ''}`}
              onClick={this.handleToggleMenu}
            >
              <span
                className={`burger-line ${isMenuShown ? 'close one' : ''}`}
              />
              <span
                className={`burger-line ${isMenuShown ? 'close two' : ''}`}
              />
              <span className={`burger-line ${isMenuShown ? 'remove' : ''}`} />
            </div>

            {isMenuShown && (
              <div className="navigation">
                <h5 className="header-welcome-user">Welcome, {name}!</h5>
                <NavLink
                  exact
                  to={`/spirit/index`}
                  className="nav-link"
                  activeClassName="selected"
                  onClick={this.handleToggleMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  to={`/spirit/users/${id}`}
                  className="nav-link"
                  activeClassName="selected"
                  onClick={this.handleToggleMenu}
                >
                  My Dashboard
                </NavLink>

                <NavLink
                  exact
                  to={`/spirit/users/${id}/create`}
                  className="nav-link"
                  activeClassName="selected"
                  onClick={this.handleToggleMenu}
                >
                  My Clinic
                </NavLink>

                <span className="nav-link" onClick={this.handleLogout}>
                  Logout
                </span>
              </div>
            )}
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
  }
}

export const mapStateToProps = store => ({
  user: store.user
});

export const mapDispatchToProps = dispatch => ({
  clearCurrentUser: () => {
    dispatch(actions.clearCurrentUser());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

Header.propTypes = {
  user: PropTypes.object
};
