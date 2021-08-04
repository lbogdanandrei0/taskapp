
import TaskContainer from "./TaskContainer";
import React from "react";
import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import { addNewTask, deleteExistingTask, getAllTasks } from "../Util/DataHelper";
import {fetchTasksRedux, addNewTaskRedux, editExistingTaskRedux, deleteExistingTaskRedux} from "../Redux/actions";

class TaskContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {tasks: []}
    }
    componentDidMount(){
        getAllTasks().then((response) => {this.props.fetchTasksRedux(response.data); console.log(this.props.tasks)});
        this.setState({tasks: this.props.tasks});
    }
    async addTask(){
        const textInput = document.getElementById("taskTitleInput");
        if(textInput.value === '')
            alert("Task text is mandatory");
        else{
            addNewTask(textInput.value)
            .then((response) => {
                this.props.addNewTaskRedux(response.data);
            })
            .catch((err) => {
                alert("There was a problem with adding the new task \n"+err.message)
            });
            textInput.value = null;
        }
    }
    async deleteTask(taskId){
        const toDelete = this.props.tasks.find(t => t.id === taskId)
        if(deleteExistingTask(toDelete)){
            this.props.deleteExistingTaskRedux(toDelete);
        }else{
            alert("Something went wrong with deleting the task " + toDelete.title);
        }
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
function mapDispatchToProps(dispatch) {  return bindActionCreators({ fetchTasksRedux,  addNewTaskRedux, editExistingTaskRedux, deleteExistingTaskRedux}, dispatch)}
export default connect(mapStateToProps, mapDispatchToProps )(TaskContent);