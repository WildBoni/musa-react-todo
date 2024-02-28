import { useState, useRef } from "react"

export default function Lezione() {
  // lo stato contiene il testo digitato nell'input
  const [myText, setMyText] = useState('Davide');
  // questa funzione viene triggerata a ogni pressione dei tasti quando si digita nell'input
  function updateInput(event) {
    // aggiorniamo lo stato con il testo che l'utente sta digitando nell'input
    setMyText(event.target.value)
  }

  // Esempio di useRef: collego un input all'hook useRef
  const userInput = useRef();
  // leggo la proprietà value dell'input accedendo tramite il ref
  function readInput() {
    console.log(userInput.current.value)
  }
  
  return(
    <div>
      {/* INPUT CHE CONTROLLA IL PARAGRAFO */}
      <input onChange={updateInput} />
      <p>{myText}</p>
      <br/>
      {/* IL VALORE DELL'INPUT VIENE LETTO AL CLICK DEL PULSANTE */}
      <input type="text" ref={userInput} />
      <button onClick={readInput}>Clicca qui</button>
    </div>
  )
}