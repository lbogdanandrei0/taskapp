import TaskTemplate from "./TaskTemplate";

import styles from './index.css';
import React from "react";
import { editExistingTask } from "../Util/DataHelper";

class TaskContainer extends React.Component{
    onDeleteTask(taskId){
        console.log(taskId);
        this.props.deleteTask(taskId);
    }
    onChangeTask(taskId, newTitle){
        const targetTask = {...this.props.tasks.find(t => t.id === taskId)};
        targetTask.title = newTitle;
        return editExistingTask(targetTask);
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
export default TaskContainer;