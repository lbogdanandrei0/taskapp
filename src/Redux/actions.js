export const fetchTasksRedux = (data) => ({type: "app/fetchTasks", payload: data});
export const addNewTaskRedux = (data) => ({type: "task/addTask", payload: data});
export const editExistingTaskRedux = (data) => ({type: "task/editTask", payload: data});
export const deleteExistingTaskRedux = (data) => ({type: "task/deleteTask", payload: data});
