const Task = ({task, removeFn}) => {
    return (
        <div onClick={() => removeFn(task)}>
            {task.taskTitle}
        </div>
    )
}

export default Task;