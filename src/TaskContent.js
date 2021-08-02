
import TaskContainer from "./TaskContainer";
import styles from './index.css';
import React from "react";
import axios from "axios";

class TaskContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {tasks: []}
    }
    componentDidMount(){
        axios.get("http://localhost:8080/task").then(response =>
        {
            this.setState({tasks: response.data});
        }).then(() => console.log("Fetched data"));
    }
    async addTask(){
        const textInput = document.getElementById("taskTitleInput");
        if(textInput.value === '')
            alert("Task text is mandatory");
        else{
            const nextId = this.state.tasks.length + 1;
            const response = await axios.post("http://localhost:8080/task/add", {title: textInput.value});
            console.log(response.data);
            const newState = [...this.state.tasks, {id: response.data.id, title: textInput.value}];
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