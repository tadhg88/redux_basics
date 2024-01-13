import { takeLatest } from "redux-saga/effects";
import { GET_USER, GET_TODO } from '../actions/actionTypes';
import { handleGetUser, handleGetUserTodo } from "./handlers/user";

export function* watcherSaga() {
    // check for dispatched action from store
    yield takeLatest(GET_USER, handleGetUser);
};

export function* watcherSagaTodo() {
    // check for dispatched action from store
    yield takeLatest(GET_TODO, handleGetUserTodo);
};