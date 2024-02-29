export default function Task({taskDetails, toggleCompleted, deleteTask}) {
  // ricevo i dettagli del task (id, name, isCompleted)
  // ricevo anche la funzione da chiamare quando si cancella un task, a cui passo l'id del task che voglio eliminare
  return (
    <li className={taskDetails.isCompleted ? "task-completed" : "task"}>
      <div>
        <input 
          type="checkbox" defaultChecked={taskDetails.isCompleted}
          onChange={() => toggleCompleted(taskDetails.id)}
        />
        <span>{taskDetails.name}</span>
      </div>
      <button onClick={() => deleteTask(taskDetails.id)}>Elimina</button>
    </li>
  )
}