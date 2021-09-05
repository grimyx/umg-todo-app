
const DisplayTask = ({ task, clickHandler }) => {
    return (
        <div id="taskName" onClick={() => clickHandler(task)}>
            {task.taskTitle}
        </div>
    )
}

export default DisplayTask