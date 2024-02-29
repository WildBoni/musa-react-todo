import { useState, useEffect } from "react"
import Lezione from "./Lezione"
import Form from "./Form"
import FilterButtonContainer from "./FilterButtonContainer"
import TaskContainer from "./TaskContainer"
// import tasks from './data/tasks'
import { nanoid } from 'nanoid'

// Per prima cosa vado a vedere se in localstorage esistono dei task già salvati:
// vengono salvati in una stringa JSON, quindi devo trasformarli con JSON.parse() per ottenere l'array di task
// Se non c'è nessun task in localStorage, inizializzo l'applicazione con un array vuoto
let storedTasks = JSON.parse(localStorage.getItem('tasks')) || []

function App() {
  // Inizializzo l'elenco di task con i valori che ho trovato in localStorage (o con array vuoto se non ho trovato nulla)
  let [myTasks, setMyTasks] = useState(storedTasks);
  // Inizializzo il filtro con una stringa vuota: in pratica visualizzo tutti i task finchè l'utente non digita qualcosa nell'input del filtro
  let [filter, setFilter] = useState('');

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
  
  // cancello i task: prendo l'id del task da eliminare
  function deleteTask(idToDelete) {
    // creo un nuovo array escludendo l'id del task che voglio eliminare
    let updatedTasks = myTasks.filter(task => task.id !== idToDelete);
    // aggiorno lo stato dei task con il nuovo array
    setMyTasks(updatedTasks);
  }

  // aggiungo un nuovo task all'array
  function addTask(text) {
    // Devo creare un oggetto di questo tipo
    // {id:2, name: 'Studia CSS', isCompleted: true}
    // Quindi creo un id, aggiungo il testo e imposto is Completed a false
    let newTask = {
      id: nanoid(),
      name: text,
      isCompleted: false
    }
    // creo un nuovo array copiando quello precedente e aggiungendo il nuovo task
    let updatedTasks = [...myTasks, newTask];
    // aggiorno l'elenco dei task con il nuovo array
    setMyTasks(updatedTasks);
  }

  function toggleCompleted(idToToggle) {
    // Devo trovare il task in base al suo id
    // {id:2, name: 'Studia CSS', isCompleted: false}
    // let taskToUpdate = myTasks.find(task => task.id === idToToggle);
    // ribalto il valore della proprietà is completed (se false diventa true e viceversa)
    // taskToUpdate.isCompleted = !taskToUpdate.isCompleted;
    
    let updatedTasks = myTasks.map((task) => {
      // trovo il task con l'id che voglio modificare
      if(task.id === idToToggle) {
        // lo aggiorno copiando l'oggetto e cambiando il valore della proprietà isCompleted
        return {...task, isCompleted: !task.isCompleted}
      }
      // ritorno il task aggiornato
      return task;
    })
    console.log(updatedTasks)
    // aggiorno lo stato con i miei cambiamenti
    setMyTasks(updatedTasks);
  }
  
  return (
    <>
      <h1>I miei Task!</h1>
      <div className="task-app">
        <Form addTask={addTask} />
        <FilterButtonContainer setFilter={setFilter} />
        <TaskContainer taskList={filteredTasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
      </div>
      {/* <Lezione /> */}
    </>
  )
}

export default App
