export default function Task({taskDetails, deleteTask}) {
  // ricevo i dettagli del task (id, name, isCompleted)
  // ricevo anche la funzione da chiamare quando si cancella un task, a cui passo l'id del task che voglio eliminare
  return (
    <li className="task">
      <div>
        <input 
          type="checkbox" defaultChecked={taskDetails.isCompleted}
        />
        <span>{taskDetails.name}</span>
      </div>
      <button onClick={() => deleteTask(taskDetails.id)}>Elimina</button>
    </li>
  )
}