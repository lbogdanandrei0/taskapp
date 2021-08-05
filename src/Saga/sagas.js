import axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';
import { ADD_NEW_TASK_SAGA, ADD_NEW_TASK, FETCH_TASKS, FETCH_TASKS_SAGA, EDIT_TASK_SAGA, DELETE_TASK_SAGA, EDIT_TASK, DELETE_TASK } from '../Redux/actions';
import {BASE_URL, DELETE_TASK_URI, GET_TASK_URI, POST_ADD_TASK_URI, PUT_UPDATE_TASK_URI} from "../Util/DataHelper"

function* fetchTasks(){
    try{
        const response = yield (axios.get(BASE_URL+GET_TASK_URI).then((response) => response.data));
        yield put({type: FETCH_TASKS, fetchedTasks: response});
    }catch(err){
        alert("Something went wrong \n" + err.message);
    }
}

function* addTask(taskTitle){
    try{
        const response = yield axios.post(BASE_URL+POST_ADD_TASK_URI, {title: taskTitle.payload});
        yield put({type:ADD_NEW_TASK, payload: response.data});
    }catch(err){
        alert("Something went wrong \n" + err.message);
    }
}

function* editTask(task){
    try{
        const response = yield axios.put(BASE_URL+PUT_UPDATE_TASK_URI, task.payload);
        yield put({type: EDIT_TASK, payload: response.data});
    }catch(err){
        alert("Something went wrong \n" + err.message);
    }
}

function* deleteTask(task){
    try{
        const response = yield axios.post(BASE_URL+DELETE_TASK_URI, task.payload);
        yield put({type: DELETE_TASK, payload: response.data});
    }catch(err){
        alert("Something went wrong \n" + err.message);
    }
}

function* loadSaga(){
    yield takeEvery(FETCH_TASKS_SAGA, fetchTasks);
    yield takeEvery(ADD_NEW_TASK_SAGA, addTask);
    yield takeEvery(EDIT_TASK_SAGA, editTask);
    yield takeEvery(DELETE_TASK_SAGA, deleteTask);
}

export default function* rootSaga(){
    yield all([loadSaga()]);
}