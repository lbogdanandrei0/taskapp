
const taskAppState = {
    tasks: [],
    newTaskTitle: ""
}

export default function appReducer(initialState = taskAppState, action){
    switch(action.type){
        case 'task/addTask':
            return {
                ...initialState,
                tasks: [...initialState.tasks, action.payload]
            }
        case 'task/updateTask':
            const newTasks = [...initialState.tasks];
            newTasks.find(task => task.id === action.payload.id).title = action.payload.title;
            return {
                ...initialState,
                tasks: newTasks
            }
        case 'app/fetchTasks':
            return{
                ...initialState,
                tasks: [...action.fetchedTasks]
            }
        case 'task/deleteTask':
            return{
                ...initialState,
                tasks: initialState.tasks.filter(task=>task.id !== action.payload.id)
            }
        default:
            return initialState;
    }
}