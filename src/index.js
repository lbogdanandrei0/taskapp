import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import appReducer from "./Redux/reducer";
import { createStore, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./Saga/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store = {store}>
        <App /> 
    </Provider>,
document.getElementById('root')
);
