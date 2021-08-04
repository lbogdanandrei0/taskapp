import React from 'react';
import ButtonTemplate from "./ButtonTemplate";

class TaskTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state = {editing: false, title: this.props.title};
    }
    editTask(){
        this.setState({editing: true});
    }
    saveTask(){
        const input = document.getElementById("newTaskTitleInput"); //TODO userRef()
        if(input.value === '' || input.value.trim().length === 0)
            //alert("Task title is mandatory");
        ;
        else{
            if(this.props.onChange(this.props.id, input.value) !== false){
                this.setState({title: input.value});
            }else{
                alert("Something went wrong");
            }
        }
        this.setState({editing: false});
    }
    deleteTask(){
        this.props.onDelete(this.props.id);
    }
    render(){
        if(!this.state.editing)
            return (
                <div className="taskPane">
                    <div className="taskTitle">{this.state.title}</div>
                    <ButtonTemplate buttonAction={() => this.editTask()} buttonType="edit" buttonText="Edit" />
                    <ButtonTemplate buttonAction={() => this.deleteTask()} buttonType="delete" buttonText="Delete" />
                </div> 
            );  
        else
            return (
                <div className="taskPane">
                        <input id="newTaskTitleInput" type="text" maxLength="30" placeholder="New Task Title..." />
                        <ButtonTemplate buttonAction={() => this.saveTask()} buttonType="save" buttonText="Save" />
                </div> 
            );
    }
}

export default TaskTemplate;