import { useRef } from "react"

export default function Form({addTask}) {
  const inputRef = useRef();

  function handleAddTask() {
    addTask(inputRef.current.value)
    inputRef.current.value = '';
  }
  
  return (
    <>
      <h4>Che cosa devi fare?</h4>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleAddTask()}>Aggiungi</button>
    </>
  )
}