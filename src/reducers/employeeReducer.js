import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
} from "../actions/employeeActions";

const initialState = {
  employee: [],
  currentUser: {},
  isLoading: false,
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default employee;
