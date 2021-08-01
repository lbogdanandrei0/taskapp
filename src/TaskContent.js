
import TaskContainer from "./TaskContainer";
import styles from './index.css';
import React from "react";

class TaskContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {tasks: [{title:"firstTask", id:1}, {title:"secondTask", id:2},{title:"thirdTask", id:3}]}
    }
    addTask(){
        const textInput = document.getElementById("taskTitleInput");
        if(textInput.value === '')
            alert("Task text is mandatory");
        else{
            const newState = [...this.state.tasks, {title: textInput.value}];
            this.setState({tasks: newState});
            textInput.value = null;
        }
    }
    deleteTask(taskId){
        console.log(taskId);
        const newState = this.state.tasks.filter(task => task.id != taskId);
        this.setState({tasks: newState});
    }
    render(){
        return (           
            <div className="taskContent">
                <div className="taskHeader">
                    <h1>Tasks: {this.state.tasks.length} </h1>
                </div>
                <TaskContainer deleteTask={this.deleteTask.bind(this)} tasks = {this.state.tasks}/>
                <div className="taskActions">
                    <input id="taskTitleInput" type="text" maxLength="30" />
                    <button onClick={this.addTask.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

export default TaskContent;