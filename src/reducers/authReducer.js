import {
  GET_USER,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_ERROR,
} from "../actions/authActions";

const initialState = {
  isAuth: false,
  isAuthErr: false,
  isRegisterErr: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isAuth: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        isAuth: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isAuth: false,
        isAuthErr: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        isAuth: false,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isRegisterErr: action.error,
      };
    default:
      return state;
  }
};

export default auth;
