import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/user";
import { requestGetUser } from './../requests/user';

export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser);

        const { data } = response;

        console.log("data received in response: ", data);
        yield put (setUser(data));
    }
    catch(error) {
        console.log(error);
    }
}