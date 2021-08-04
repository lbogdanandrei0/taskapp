import appReducer from "./reducer";
import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../Saga/sagas";
import { fetchTasks } from "./actions";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;