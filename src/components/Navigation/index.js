import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logoutUser } from "../../actions/authActions";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

class Navigation extends Component {
  logouthandler = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuth } = this.props;

    return (
      <nav className="navigation">
        <ul>
          {isAuth ? (
            <>
              <li>
                <NavLink to="/" onClick={this.logouthandler}>
                  Logout
                </NavLink>
              </li>
              <li>
                <NavLink to="/list">User list</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
