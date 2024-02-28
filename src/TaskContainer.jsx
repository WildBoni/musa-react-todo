import Task from "./Task"
import TaskCounter from "./TaskCounter"

export default function TaskContainer({taskList, deleteTask}) {
  // faccio un ciclo nell'array di task e creo il componente
  let myList = taskList.map(task => 
    <Task 
      taskDetails={task} 
      deleteTask={deleteTask} 
      key={task.id}
    />
  )

  return(
    <>
      <TaskCounter count={taskList.length} />
      {/* se non ho task da mostare, visualizzo un avviso */}
      {taskList.length > 0 ? (
        <ul className="task-container">
          {myList}
        </ul>
      ) : (
        <p>Non ci sono task!</p>
      )}
    </>
  )
}