import { useRef } from "react"

export default function Form({addTask}) {
  // uso un ref per accedere al testo scritto dall'utente nell'input
  const inputRef = useRef();

  // controllo se l'utente ha premuto invio o se ha cliccato il pulsante
  function handleAddTask(event) {
    if(event.key === 'Enter' || event.type === 'click') {
      // se l'input non è vuoto...
      if(inputRef.current.value) {
        // ... aggiungo un task
        // addTask arriva come prop e serve ad aggiornare l'elenco dei task
        addTask(inputRef.current.value)
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