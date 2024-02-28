export default function Task({taskDetails, deleteTask}) {
  
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