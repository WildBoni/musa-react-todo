import { useContext } from 'react';
import { TasksDispatchContext } from "./TaskContext"
// import { myTest } from './TaskContext';

export default function Task({taskDetails}) {
  let dispatch = useContext(TasksDispatchContext)

  function deleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }

  function toggleCompleted(taskId) {
    dispatch({
      type: 'toggled',
      id: taskId
    })
  }
  // const myVariable = useContext(myTest);
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