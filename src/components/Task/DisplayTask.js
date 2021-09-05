import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// DisplayTask will display edit icon if task is not completed
// else no icon
const DisplayTask = ({ task, clickHandler, editBtnClickHAndler }) => {
    return (
        <div className="taskContainer">
            <div className="taskName" onClick={() => clickHandler(task)}>
                {task.taskTitle}
            </div>
            {!task.isDone && <FontAwesomeIcon icon={faEdit} className="iconBtn edit" onClick={editBtnClickHAndler}/>}
        </div>
    )
}

export default DisplayTask