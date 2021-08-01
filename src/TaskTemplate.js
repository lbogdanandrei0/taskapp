import React, {Component} from 'react';

import styles from './index.css';

class TaskTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {editing: false, title: this.props.title}
    }
    editTask(){
        this.setState({editing: true});
    }
    saveTask(){
        const input = document.getElementById("newTaskTitleInput");
        if(input.value != ''){
            this.setState({editing: false, title: input.value});
        }
        else{
            this.setState({editing: false});
        }
    }
    deleteTask(){
        this.props.onDelete(this.props.id);
    }
    render(){
        if(!this.state.editing)
            return (
                <div className="taskPane">
                    <div className="taskTitle">{this.state.title}</div>
                    <button onClick={this.editTask.bind(this)}>Edit</button>
                    <button onClick={this.deleteTask.bind(this)}>Delete</button>
                </div> 
            );  
        else
            return (
                <div className="taskPane">
                        <input id="newTaskTitleInput" type="text" maxLength="30" placeholder="New Task Title..." />
                        <button onClick={this.saveTask.bind(this)}>Save</button>
                </div> 
            );
    }
}

export default TaskTemplate;