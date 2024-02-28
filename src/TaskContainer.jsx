import Task from "./Task"
import TaskCounter from "./TaskCounter"

export default function TaskContainer({taskList}) {
  let myList = taskList.map(task => <Task text={task.name} />)
  return(
    <>
      <TaskCounter count={3} />
      <ul className="task-container">
        {myList}
      </ul>
    </>
  )
}