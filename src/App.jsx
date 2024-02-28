import { useState } from "react"
import Lezione from "./Lezione"
import Form from "./Form"
import FilterButtonContainer from "./FilterButtonContainer"
import TaskContainer from "./TaskContainer"
import tasks from './data/tasks'

function App() {
  // integro la logica del pulsante delete
  // Suggerimento: posso mettere l'array dei tasks dentro a useState
  let [myTasks, setMyTasks] = useState(tasks);

  function deleteTask(idToDelete) {
    let updatedTasks = myTasks.filter(task => task.id !== idToDelete);
    setMyTasks(updatedTasks);

  }

  return (
    <>
      <h1>I miei Task</h1>
      <div className="task-app">
        <Form />
        <FilterButtonContainer />
        <TaskContainer taskList={myTasks} deleteTask={deleteTask} />
      </div>
      {/* <Lezione /> */}
    </>
  )
}

export default App
