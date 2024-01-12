import { takeLatest } from "redux-saga/effects";
import { GET_USER } from '../actions/actionTypes';
import { handleGetUser } from "./handlers/user";

export function* watcherSaga() {
    // check for dispatched action from store
    yield takeLatest(GET_USER, handleGetUser);
};