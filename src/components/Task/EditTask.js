import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

const EditTask = ({ task, btnClickHandler }) => {

    const [editTitle, setEditTitle] = useState(task.taskTitle);

    // handler fn for input element
    const editHandler = (event) => {
        setEditTitle(event.target.value);
    }

    // will display save icon in place of edit icon
    return (
        <div className="taskContainer">
            <div className="taskName">
                <input className="taskInput" value={editTitle} onChange={editHandler} />
            </div>
            <FontAwesomeIcon icon={faSave} className="iconBtn edit" onClick={()=> btnClickHandler(editTitle)}/>
        </div>
    )
}

// TO DO 
// REFACTOR THIS ASAP !!!!!!!!
export default EditTask;