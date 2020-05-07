import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginUser } from "../../actions/authActions";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

class Login extends Component {
  state = {
    email: null,
    password: null,
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    const { isAuthErr, isAuth } = this.props.auth;

    if (isAuth) {
      return <Redirect to="/list" />;
    }

    return (
      <div className="wrapper">
        <h1>Login</h1>
        <form className="form">
          <label htmlFor="email">
            Your e-mail
            <input id="email" name="email" onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            Your password
            <input id="password" name="password" onChange={this.handleChange} />
          </label>
          {isAuthErr ? (
            <span className="error">
              User not found: Invalid email or password
            </span>
          ) : null}
          <button onClick={this.onSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
