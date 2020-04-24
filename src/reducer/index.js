import { combineReducers } from "redux";
import commonReducer from "./common.js";



export default combineReducers({
  common: commonReducer
});