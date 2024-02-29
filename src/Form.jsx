import { useDispatch } from 'react-redux'
import {added} from './features/taskSlice'
import { useRef } from "react"
import { nanoid } from "nanoid";

export default function Form({addTask}) {
  // con useDispatch posso effettuare il dispatch delle azioni
  const dispatch = useDispatch();
  const inputRef = useRef();

  // controllo se l'utente ha premuto invio o se ha cliccato il pulsante
  function handleAddTask(event) {
    if(event.key === 'Enter' || event.type === 'click') {
      // se l'input non è vuoto...
      if(inputRef.current.value) {
        // ... aggiungo un task con un dispatch dell'azione
        dispatch(added({
          id: nanoid(),
          name: inputRef.current.value
        }))
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