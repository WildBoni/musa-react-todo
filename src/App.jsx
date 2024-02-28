import { useState, useEffect } from "react"
import Lezione from "./Lezione"
import Form from "./Form"
import FilterButtonContainer from "./FilterButtonContainer"
import TaskContainer from "./TaskContainer"
// import tasks from './data/tasks'
import { nanoid } from 'nanoid'

let storedTasks = JSON.parse(localStorage.getItem('tasks')) || []

function App() {
  // integro la logica del pulsante delete
  // Suggerimento: posso mettere l'array dei tasks dentro a useState
  let [myTasks, setMyTasks] = useState(storedTasks);
  let [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(myTasks))
  },
  [myTasks])

  let filteredTasks = myTasks.filter(task => 
    task.name.includes(filter)
  );
  
  function deleteTask(idToDelete) {
    let updatedTasks = myTasks.filter(task => task.id !== idToDelete);
    setMyTasks(updatedTasks);
  }

  function addTask(text) {
    // logica per aggiungere un nuovo task all'array
    // {id:2, name: 'Studia CSS', isCompleted: true}
    let newTask = {
      id: nanoid(),
      name: text,
      isCompleted: false
    }
    console.log(newTask)
    let updatedTasks = [...myTasks, newTask];
    setMyTasks(updatedTasks);
  }

  return (
    <>
      <h1>I miei Task</h1>
      <div className="task-app">
        <Form addTask={addTask} />
        <FilterButtonContainer setFilter={setFilter} />
        <TaskContainer taskList={filteredTasks} deleteTask={deleteTask} />
      </div>
      {/* <Lezione /> */}
    </>
  )
}

export default App
