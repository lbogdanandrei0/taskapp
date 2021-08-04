import axios from "axios";

export const BASE_URL = "http://localhost:8080/task";
export const GET_TASK_URI = "/";
export const PUT_UPDATE_TASK_URI = "/update";
export const POST_ADD_TASK_URI = "/add";
export const DELETE_TASK_URI = "/delete";

export async function getAllTasks(){
    const tasks = await axios.get(BASE_URL + GET_TASK_URI);
    return tasks;
}

export async function addNewTask(newTaskTitle){
    return await axios.post(BASE_URL + POST_ADD_TASK_URI, {title: newTaskTitle});
}

export async function deleteExistingTask(toDelete){
    await axios.post(BASE_URL+DELETE_TASK_URI, toDelete)
    .then((response) => {
        return true;
    })
    .catch((err) => 
    {
        //alert("Something went wrong \n" + err.message)
        return false;
    });
}

export async function editExistingTask(toModify){
    await axios.put(BASE_URL+PUT_UPDATE_TASK_URI, toModify).then((response) => {return response.title}).catch((err) => {return false;});
}