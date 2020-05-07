import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import firebase from "../../config/firebaseConfig";
import { getUser } from "../../actions/authActions";
import { connect } from "react-redux";

//components
import EmployeeList from "../EmployeeList";
import Login from "../Login";
import Register from "../Register";
import PrivateRoute from "./PrivateRoute";
import Navigation from "../Navigation";
import Loader from "../Loader";

// Styles
import "./styles.scss";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

class App extends Component {
  state = {
    user: null,
    isUserLoaded: false,
  };

  componentDidMount() {
    this.userObserver();
  }

  userObserver = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.getUser();
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  render() {
    // const { isUserLoaded } = this.state;

    // if (!isUserLoaded && this.props.auth) {
    //   return <Loader />;
    // }

    return (
      <Router>
        <Navigation />
        <Switch>
          <PrivateRoute
            path="/list"
            exact
            component={EmployeeList}
            user={this.props.isAuth}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          {this.props.isAuth ? null : <Redirect from="/" to="/list" />}
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
