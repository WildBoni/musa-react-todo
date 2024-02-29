import { useDispatch } from 'react-redux'
import {deleted, toggled} from './features/taskSlice'

export default function Task({taskDetails}) {
  // con useDispatch posso effettuare il dispatch delle azioni
  const dispatch = useDispatch()

  function deleteTask(taskId) {
    dispatch(deleted({
      id: taskId
    }))
  }

  function toggleCompleted(taskId) {
    dispatch(toggled({
      id: taskId
    }))
  }
  
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