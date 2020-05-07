import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

class Register extends Component {
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
    this.props.registerUser(this.state);
  };

  render() {
    const { isAuth, isRegisterErr } = this.props.auth;

    if (isAuth) {
      return <Redirect to="/list" />;
    }
    return (
      <div className="wrapper">
        <h1>Register</h1>
        <form className="form">
          <label htmlFor="email">
            Your e-mail
            <input id="email" name="email" onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            Your password
            <input id="password" name="password" onChange={this.handleChange} />
          </label>
          {isRegisterErr ? (
            <span className="error">{isRegisterErr}</span>
          ) : null}
          <button onClick={this.onSubmit}>Register</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
