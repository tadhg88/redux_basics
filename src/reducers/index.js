import { combineReducers } from "redux";
import counterReducer from "./reducer";
import users from "./user";

export default combineReducers({
    counterSlice: counterReducer,
    usersSlice: users
});
