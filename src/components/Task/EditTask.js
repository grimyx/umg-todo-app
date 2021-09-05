import { useState } from "react"

const EditTask = ({task, btnClickHandler}) => {

    const [editTitle, setEditTitle] = useState(task.taskTitle);

    // handler fn for input element
    const editHandler = (event) => {
        setEditTitle(event.target.value);
    }

    return (
        <div class="taskName">
            <input className="taskInput" value={editTitle} onChange={editHandler} />
            <button className="taskInput" onClick={() => btnClickHandler(editTitle)}>sava</button>
        </div>
    )
}

export default EditTask;