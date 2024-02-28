import { useState, useRef } from "react"

export default function Lezione() {
  const [myText, setMyText] = useState('Davide');

  const userInput = useRef();

  function updateInput(event) {
    setMyText(event.target.value)
  }

  function readInput() {
    console.log(userInput.current.value)
  }
  
  return(
    <div>
      <input onChange={updateInput} />
      <p>{myText}</p>
      <br/>
      <input type="text" ref={userInput} />
      <button onClick={readInput}>Clicca qui</button>
    </div>
  )
}