import { call, put } from "redux-saga/effects";
import { requestGetUser, requestUserTodo } from './../requests/user';
import { setUser } from "../../actions/actionCreators";
import { setUserTodo } from './../../actions/actionCreators';

export function* handleGetUser(action) {
    try {
        console.log('handleGetUser - action: ', action);

        const response = yield call(requestGetUser);

        const { data } = response;

        console.log("data received in response: ", data);
        yield put (setUser(data));
    }
    catch(error) {
        console.log(error);
    }
}

export function* handleGetUserTodo(action) {
    try {
        console.log('handleGetUserTodo - action: ', action);

        const response = yield call(requestUserTodo, action.payload);

        const { data } = response;

        console.log("data received in response: ", data);
        
        yield put (setUserTodo(data));
    }
    catch(error) {
        console.log(error);
    }
}