import { useState } from 'react';

import './App.css';
import Task from './components/Task/Task';


// generates simple id 
const genSimpleId = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()


const App = () => {

  // STATES

  // holds all tasks
  const [taskData, setTaskData] = useState([]);

  // holds new task
  const [task, setTask] = useState("");

  // state for sort task 
  const [sortOption, setSortOption] = useState("all")

  // add new task object to array, and resets input field
  const addTask = (taskTitle) => {
    // since require on input dont work outside form , i'll use this way to prevent tasks withouth title
    if (taskTitle !== "") {
      setTaskData([...taskData, { id: genSimpleId(), taskTitle: taskTitle, isDone: false }]);
      setTask("");
    }
  }

  const inputHandler = (event) => {
    setTask(event.target.value);
  }


  const removeTask = (task) => {
    //setTaskData(taskData.filter(t => t.id !== task.id));
    setTaskData(taskData.filter(t => {
      if (t.id === task.id) {
        t.isDone = true;
        return t;
      } else {
        return t;
      }
    }))
    console.log(taskData);
  }

  // change style of task field based on is task done or not 
  /*
  const setTaskStile = (task) => {
    if (task.isDone) {
      return "task doneTask";
    } else {
      return "task";
    }
  };
  */

  // update task after edit
  const updateTask = (task, newTaskTitle) => {
    setTaskData(taskData.filter(t => {
      if(t.id === task.id) {
        const ff = {...task, taskTitle: newTaskTitle}
        console.log(ff);
        return {...task, taskTitle: newTaskTitle}
      } else {
        return t;
      }
    }))
  }

  // handler for check boxes
  const sortBoxHandler = (event) => {
    setSortOption(event.target.value);
    console.log('value', event.target.value)
  }

  // filter tasks based on selected option
  const filterTasks = (data, filterOption) => {
    switch (filterOption) {
      case "all": return data;
      case "done": return data.filter(d => d.isDone);
      case "left": return data.filter(d => !d.isDone);
      default: return data;
    }
  }

  // handler for delete button
  const deleteBtnHandler = (task) => {
    // ask the user about deletion

    // delete item from list
    setTaskData(taskData.filter(t => t.id !== task.id))
  }


  return (
    <div className="App">
      <div id="sortLabels">
        <div>
          <label htmlFor="all">All Tasks</label>
          <input type="radio" name="sortList" value="all" onClick={sortBoxHandler} defaultChecked />
        </div>
        <div>
          <label htmlFor="done">Done Tasks </label>
          <input type="radio" name="sortList" value="done" onClick={sortBoxHandler} />
        </div>
        <div>
          <label htmlFor="left">Tasks Left</label>
          <input type="radio" name="sortList" value="left" onClick={sortBoxHandler} />
        </div>
      </div>
      <div id="newTask">
        <input value={task} onChange={inputHandler} className="taskInput violet" required />
        <button onClick={() => addTask(task)} className="taskInput green">+</button>
      </div>

      <div id="list">
        { console.log(taskData) }
        {
        filterTasks(taskData, sortOption).map(task => {
          // 1. kada je task dodat ima hoover efekat
          // 2. kada se klikne na task, podesava se isDone , koji treba da ubacim, ide line-thru
          //    i task vise nije aktivan
          return (
            <Task task={task} clickedHandler={removeTask} deleteBtnHandler={deleteBtnHandler} saveHandler={updateTask}/> 
          )
        })}
      </div>


    </div>
  );
}

export default App;


// TO DO 
// dodaj dugme za brisanje
// dodaj dugme za edit
// nece da bude precrtan tekst za gotov task nego ce da bude stikliran 
// smisli sta dalje
// uredi stilove
// filtriranje, tj prikazivanje posebno gotovih taskova, posebno taskova koji nisu gotovi
// dodavanje datuma , do kada task treba da se zavrsi. po defaultu za danas
// omoguci editovanje taska. da pri editovanju se task prosiri i onda da se prikazu inputi za polja i to 
