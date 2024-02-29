import { useContext } from "react";
import { useRef } from "react"
import { TasksDispatchContext } from "./TaskContext"
import { nanoid } from "nanoid";

export default function Form({addTask}) {
  const dispatch = useContext(TasksDispatchContext);
  // uso un ref per accedere al testo scritto dall'utente nell'input
  const inputRef = useRef();

  // controllo se l'utente ha premuto invio o se ha cliccato il pulsante
  function handleAddTask(event) {
    if(event.key === 'Enter' || event.type === 'click') {
      // se l'input non è vuoto...
      if(inputRef.current.value) {
        // ... aggiungo un task
        dispatch({
          type: 'added',
          id: nanoid(),
          name: inputRef.current.value
        })
        // svuoto il testo dell'input
        inputRef.current.value = '';
      }
    }
  }
  
  return (
    <>
      <h4>Che cosa devi fare?</h4>
      <input type="text" ref={inputRef} onKeyUp={(event) => handleAddTask(event)}/>
      <button onClick={(event) => handleAddTask(event)}>Aggiungi</button>
    </>
  )
}