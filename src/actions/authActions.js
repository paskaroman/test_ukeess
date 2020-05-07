//Action Types

export const GET_USER = "GET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

//actions creators

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const logoutUser = (user) => {
  return {
    type: LOGOUT_USER,
  };
};

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const loginUserSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS,
  };
};

export const loginUserError = () => {
  return {
    type: LOGIN_USER_ERROR,
  };
};

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

export const registerUserError = (error) => {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
};
