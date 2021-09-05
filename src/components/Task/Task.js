import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTask from './EditTask';
import { useState } from 'react';
import DisplayTask from './DisplayTask';

const Task = ({ task, clickedHandler, deleteBtnHandler, saveHandler }) => {
    // togle edit mode 
    const [editMode, setEditMode] = useState(false);

    // handler for edit button
    const editTaskBtn = () => {
        setEditMode(true);
    }

    
    const kk = (editTitle) => {
        saveHandler(task, editTitle); 
        task.taskTitle = editTitle;
        setEditMode(false);
    }

    return (
        <div className="task">
            {task.isDone && <FontAwesomeIcon icon={faCheck} className="done" color="green" />}
            {editMode ? <EditTask task={task} btnClickHandler={kk} />
                      : <DisplayTask task={task} clickHandler={clickedHandler} />
            }
            {// if task is done dont displa edit button
                !task.isDone && <FontAwesomeIcon icon={faEdit} className="edit" onClick={editTaskBtn} />
            }
            <FontAwesomeIcon icon={faTrash} className="right delete" onClick={() => deleteBtnHandler(task)} />
        </div>
    )
}

export default Task;