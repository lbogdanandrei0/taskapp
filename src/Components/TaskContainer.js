import TaskTemplate from "./TaskTemplate";

import styles from './index.css';
import React from "react";
import { bindActionCreators } from 'redux'
import {connect} from "react-redux";
import { editExistingTaskAsync } from "../Redux/actions";

class TaskContainer extends React.Component{
    onDeleteTask(taskId){
        this.props.deleteTask(taskId);
    }
    onChangeTask(taskId, newTitle){
        const targetTask = {...this.props.tasks.find(t => t.id === taskId)};
        targetTask.title = newTitle;
        this.props.editExistingTaskAsync(targetTask);
    }
    render(){
        return <div className="taskContainer">
                    {
                    this.props.tasks.map((task) => {
                        return (
                        <div key = {task.id} className={styles.taskContainer}>
                            <TaskTemplate onChange={this.onChangeTask.bind(this)} onDelete={this.onDeleteTask.bind(this)} title={task.title} id={task.id} />
                        </div>);
                    }) 
                    }
                </div>
    }
}

function mapDispatchToProps(dispatch) {  return bindActionCreators({editExistingTaskAsync}, dispatch)}
export default connect(null, mapDispatchToProps )(TaskContainer);