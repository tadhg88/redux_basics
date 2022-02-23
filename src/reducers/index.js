import { combineReducers } from "redux";
import counterReducer from "./reducer";
import users from "./user";

export default combineReducers({
    counter: counterReducer,
    users
});
