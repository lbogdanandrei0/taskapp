export const FETCH_TASKS = "app/fetchTasks";
export const FETCH_TASKS_SAGA = "app/fetchTasksSaga";
export const ADD_NEW_TASK = "task/addTask";
export const ADD_NEW_TASK_SAGA = "task/addTaskSaga";
export const EDIT_TASK = "task/updateTask";
export const EDIT_TASK_SAGA = "task/editTaskSaga";
export const DELETE_TASK = "task/deleteTask";
export const DELETE_TASK_SAGA = "task/deleteTaskSaga";

export const fetchTasksAsync = () => ({type: FETCH_TASKS_SAGA});
export const addNewTaskAsync = (data) => ({type: ADD_NEW_TASK_SAGA, payload: data});
export const editExistingTaskAsync = (data) => ({type: EDIT_TASK_SAGA, payload: data});
export const deleteExistingTaskAsync = (data) => ({type: DELETE_TASK_SAGA, payload: data});
