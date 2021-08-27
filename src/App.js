import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
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

  const [sortOption, setSortOption] = useState("all")

  const itemFn = (item) => <Task taskq={item} removeFn={removeTask} key={item.id} />

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
  const setTaskStile = (task) => {
    if (task.isDone) {
      return "task doneTask";
    } else {
      return "task";
    }
  };

  // handler for check boxes
  const sortBoxHandler = (event) => {
    setSortOption(event.target.value);
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

  return (
    <div className="App">
      <div>
        <input value={task} onChange={inputHandler} className="taskInput violet" required />
        <button onClick={() => addTask(task)} className="taskInput green">+</button>
      </div>
      <div id="sortLabels">
        <div>
          <label for="all">All Tasks</label>
          <input type="radio" name="sortList" value="all" onChange={sortBoxHandler} checked/>
        </div>
        <div>
          <label for="done">Done Tasks </label>
          <input type="radio" name="sortList" value="done" onChange={sortBoxHandler} />
        </div>
        <div>
          <label for="left">Tasks Left</label>
          <input type="radio" name="sortList" value="left" onChange={sortBoxHandler} />
        </div>
      </div>
      <div id="list">
        {filterTasks(taskData, sortOption).map(task => {
          // 1. kada je task dodat ima hoover efekat
          // 2. kada se klikne na task, podesava se isDone , koji treba da ubacim, ide line-thru
          //    i task vise nije aktivan
          return (
            <div onClick={() => removeTask(task)} className={setTaskStile(task)}>
              <FontAwesomeIcon icon={faCheck} />
              {task.taskTitle}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;


// TO DO 
// dodaj dugme za brisanje
// smisli sta dalje
// uredi stilove
// filtriranje, tj prikazivanje posebno gotovih taskova, posebno taskova koji nisu gotovi
// dodavanje datuma , do kada task treba da se zavrsi. po defaultu za danas
// omoguci editovanje taska. da pri editovanju se task prosiri i onda da se prikazu inputi za polja i to 
