export const FETCH_TASKS = "app/fetchTasks";
export const FETCH_TASKS_SAGA = "app/fetchTasks2";
export const ADD_NEW_TASK = "task/addTask";
export const ADD_NEW_TASK_SAGA = "task/addTask2";
export const EDIT_TASK = "task/editTask";
export const EDIT_TASK_SAGA = "task/editTask2";
export const DELETE_TASK = "task/deleteTask";
export const DELETE_TASK_SAGA = "task/deleteTask2";

export const fetchTasks = () => ({type: FETCH_TASKS_SAGA});
export const addNewTaskRedux = () => ({type: ADD_NEW_TASK_SAGA});
export const editExistingTaskRedux = (data) => ({type: EDIT_TASK_SAGA, payload: data});
export const deleteExistingTaskRedux = (data) => ({type: DELETE_TASK_SAGA, payload: data});
