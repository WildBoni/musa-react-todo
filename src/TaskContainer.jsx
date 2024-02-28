import Task from "./Task"
import TaskCounter from "./TaskCounter"

export default function TaskContainer({taskList, deleteTask}) {
  let myList = taskList.map(task => 
    <Task taskDetails={task} deleteTask={deleteTask} />
  )

  return(
    <>
      <TaskCounter count={taskList.length} />
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