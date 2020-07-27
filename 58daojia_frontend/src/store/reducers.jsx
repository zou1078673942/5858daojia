import { combineReducers } from "redux";
import { reducer as cityReducer } from '../component/page-home/store/index';

export default combineReducers({
  city: cityReducer
})