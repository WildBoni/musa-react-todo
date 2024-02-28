import { useRef } from "react"

export default function Form({addTask}) {
  const inputRef = useRef();

  function handleAddTask(event) {
    if(event.key === 'Enter' || event.type === 'click') {
      if(inputRef.current.value) {
        addTask(inputRef.current.value)
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