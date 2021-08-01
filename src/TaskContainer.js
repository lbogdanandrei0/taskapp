import TaskTemplate from "./TaskTemplate";

import styles from './index.css';
import React from "react";

class TaskContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {tasks: this.props.tasks};
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.tasks.length != this.state.tasks.length){
            console.log(nextProps.tasks);
            this.setState({tasks: nextProps.tasks});
            return true;
        }
        return false;
    }
    onDeleteTask(taskId){
        console.log(taskId);
        this.props.deleteTask(taskId);
    }
    render(){
        // const t = this.props.tasks.map((task, index) => {
        //     return (
        //     <div key = {index} className={styles.taskContainer}>
        //         <TaskTemplate title={task.title} />
        //     </div>);
        // });
        return <div className="taskContainer">
                    {
                    this.state.tasks.map((task) => {
                        return (
                        <div key = {task.id} className={styles.taskContainer}>
                            <TaskTemplate onDelete={this.onDeleteTask.bind(this)} title={task.title} id={task.id} />
                        </div>);
                    }) 
                    }
                </div>
    }

}

export default TaskContainer;