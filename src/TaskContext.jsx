import { createContext, useReducer } from 'react';
import taskReducer from './TaskReducer';

export let TasksContext = createContext(null);
export let TasksDispatchContext = createContext(null);

let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default function TasksProvider({children}) {
  let [myTasks, dispatch] = useReducer(taskReducer, storedTasks);

  return (
    <TasksContext.Provider value={myTasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}