import { useState } from 'react';
import styles from './TaskInput.styles.css';

// Props
// btnOnClickHandler -> function that will do something on button click, in this case add task to list
const TaskInput = ({addBtnHandler}) => {

    const [taskTitle, setTaskTitle] = useState("");

    const inputHandler = (event) => {
        setTaskTitle(event.target.value);
        //console.log(event.target.value)
    }

    return (
        <div className={styles.container}>
        <input placeholder="Enter task" className={styles.taskInput} value={taskTitle} onChange={inputHandler}/>
        <button onClick={() => addBtnHandler(taskTitle)}>+</button>
      </div>

    )
};

export default TaskInput;

// TO DO
// set value on click to empty string