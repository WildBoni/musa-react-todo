import { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import Form from "./Form"
import FilterButtonContainer from "./FilterButtonContainer"
import TaskContainer from "./TaskContainer"

function App() {
  // Inizializzo il filtro con una stringa vuota: in pratica visualizzo tutti i task finchè l'utente non digita qualcosa nell'input del filtro
  let [filter, setFilter] = useState('');

  // con useSelector accedo allo store, selezionando la slice chiamata tasks
  const myTasks = useSelector((state) => state.tasks)
  
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
    </>
  )
}

export default App
