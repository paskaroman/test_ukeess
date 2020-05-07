import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployeeRequest } from "../../actions/employeeActions";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeRequest: () => dispatch(getEmployeeRequest()),
  };
};

class EmployeeList extends Component {
  componentDidMount() {
    this.props.getEmployeeRequest();
  }

  render() {
    return <div className="wrapper">list</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
