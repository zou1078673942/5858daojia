import { combineReducers } from "redux";
import { reducer as cityReducer } from '../application/Address/store/';

export default combineReducers({
  city: cityReducer
})