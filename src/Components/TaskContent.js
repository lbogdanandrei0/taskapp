
import TaskContainer from "./TaskContainer";
import React from "react";
import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import {fetchTasksAsync, addNewTaskAsync, editExistingTaskAsync, deleteExistingTaskAsync} from "../Redux/actions";

class TaskContent extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){
        this.props.fetchTasksAsync();
        //getAllTasks().then((response) => {this.props.fetchTasksRedux(response.data); console.log(this.props.tasks)});
    }
    addTask(){
        const textInput = document.getElementById("taskTitleInput");
        if(textInput.value === '')
            alert("Task text is mandatory");
        else{
            this.props.addNewTaskAsync(textInput.value);
            // addNewTask(textInput.value)
            // .then((response) => {
            //     this.props.addNewTaskRedux(response.data);
            // })
            // .catch((err) => {
            //     alert("There was a problem with adding the new task \n"+err.message)
            // });
            textInput.value = null;
        }
    }
    deleteTask(taskId){
        const toDelete = this.props.tasks.find(t => t.id === taskId)
        this.props.deleteExistingTaskAsync(toDelete);
        // if(deleteExistingTask(toDelete)){
        //     this.props.deleteExistingTaskAsync(toDelete);
        // }else{
        //     alert("Something went wrong with deleting the task " + toDelete.title);
        // }
    }
    render(){
        return (           
            <div className="taskContent">
                <div className="taskHeader">
                    <h1>Tasks: {this.props.tasks.length} </h1>
                </div>
                <TaskContainer deleteTask={(id) => this.deleteTask(id)} tasks = {this.props.tasks}/>
                <div className="taskActions">
                    <input id="taskTitleInput" type="text" maxLength="30" />
                    <button onClick={this.addTask.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {  return { tasks: state.tasks }}
function mapDispatchToProps(dispatch) {  return bindActionCreators({ fetchTasksAsync,  addNewTaskAsync, editExistingTaskAsync, deleteExistingTaskAsync}, dispatch)}
export default connect(mapStateToProps, mapDispatchToProps )(TaskContent);