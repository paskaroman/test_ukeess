//Action Types

export const GET_EMPLOYEE_REQUEST = "GET_EMPLOYEE_REQUEST";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";

//actions creators

export const getEmployeeRequest = () => {
  return {
    type: GET_EMPLOYEE_REQUEST,
  };
};

export const getEmployeeSuccess = (data) => {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    data,
  };
};
