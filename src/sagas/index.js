import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginUserSuccess,
  loginUserError,
  registerUserError,
} from "../actions/authActions";
import { getEmployeeSuccess } from "../actions/employeeActions";
import api from "../api/api";

function* loginUser(action) {
  try {
    yield call(api.loginUser, action.user);
    yield put(loginUserSuccess());
  } catch (e) {
    yield put(loginUserError());
  }
}

function* logoutUser() {
  try {
    yield call(api.logoutUser);
    yield put(logoutUser());
  } catch (e) {
    console.log(e.message);
  }
}

function* registerUser(action) {
  try {
    yield call(api.registerUser, action.user);
  } catch (e) {
    yield put(registerUserError(e.message));
  }
}

function* getEmployee(action) {
  try {
    const data = yield call(api.getEmployee);
    console.warn("saga", data);

    yield put(getEmployeeSuccess());
  } catch (e) {
    console.log(e.message);
  }
}

function* saga() {
  yield takeLatest("LOGIN_USER", loginUser);
  yield takeLatest("LOGOUT_USER", logoutUser);
  yield takeLatest("REGISTER_USER", registerUser);
  yield takeLatest("GET_EMPLOYEE_REQUEST", getEmployee);
}

export default saga;
