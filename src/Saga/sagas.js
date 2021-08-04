import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TASKS, FETCH_TASKS_SAGA } from '../Redux/actions';
import {BASE_URL, GET_TASK_URI} from "../Util/DataHelper"

export function* fetchTasks(){
    const response = yield (axios.get(BASE_URL+GET_TASK_URI).then((response) => response.data));
    yield put({type: FETCH_TASKS, fetchedTasks: response});
}

export function* loadTasks(){
    yield takeEvery(FETCH_TASKS_SAGA, fetchTasks);
}

export default function* rootSaga(){
    yield all([loadTasks()]);
}