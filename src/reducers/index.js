import employee from "./employeeReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  employee,
  auth,
});

export default rootReducer;
