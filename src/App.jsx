import { useState, useEffect, useContext } from "react"
import Lezione from "./Lezione"
import Form from "./Form"
import FilterButtonContainer from "./FilterButtonContainer"
import TaskContainer from "./TaskContainer"
// import tasks from './data/tasks'
import { nanoid } from 'nanoid'
import { TasksContext } from "./TaskContext"

// Per prima cosa vado a vedere se in localstorage esistono dei task già salvati:
// vengono salvati in una stringa JSON, quindi devo trasformarli con JSON.parse() per ottenere l'array di task
// Se non c'è nessun task in localStorage, inizializzo l'applicazione con un array vuoto


function App() {
  // Inizializzo il filtro con una stringa vuota: in pratica visualizzo tutti i task finchè l'utente non digita qualcosa nell'input del filtro
  let [filter, setFilter] = useState('');

  let myTasks = useContext(TasksContext);
  // questo useEffect viene triggerato ogni volta che modifichiamo l'array dei task
  // Serve per salvare i task in localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(myTasks))
  },
  // triggero la funzione ogni volta che cambia l'array di task (se aggiungo o rimuovo un task)
  [myTasks])

  // filtro tutti i task in base al valore contenuto nel filtro
  // filteredTasks è la variabile che passo a TaskContainer, così visualizzo solo gli elementi filtrati
  let filteredTasks = myTasks.filter(task => 
    // per filtrare controllo se il nome del task (task.name) contiene la stringa usata come filtro
    task.name.includes(filter)
  );

  return (
    <>
      <h1>I miei Task!</h1>
      <div className="task-app">
        <Form />
        <FilterButtonContainer setFilter={setFilter} />
        <TaskContainer taskList={filteredTasks} />
      </div>
      {/* <Lezione /> */}
    </>
  )
}

export default App
