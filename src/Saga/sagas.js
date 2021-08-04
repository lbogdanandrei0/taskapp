import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';
import { ADD_NEW_TASK_SAGA, ADD_NEW_TASK, FETCH_TASKS, FETCH_TASKS_SAGA } from '../Redux/actions';
import {BASE_URL, GET_TASK_URI, POST_ADD_TASK_URI} from "../Util/DataHelper"

export function* fetchTasks(){
    const response = yield (axios.get(BASE_URL+GET_TASK_URI).then((response) => response.data));
    yield put({type: FETCH_TASKS, fetchedTasks: response});
}

export function* addTask(taskTitle){
    console.log(taskTitle.payload);
    const response = yield axios.post(BASE_URL+POST_ADD_TASK_URI, {title: taskTitle.payload});
    yield put({type:ADD_NEW_TASK, payload: response.data});
}

export function* loadTasks(){
    yield takeEvery(FETCH_TASKS_SAGA, fetchTasks);
    yield takeEvery(ADD_NEW_TASK_SAGA, addTask);
}

export default function* rootSaga(){
    yield all([loadTasks()]);
}