import { createSlice } from '@reduxjs/toolkit'

let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: storedTasks,
  reducers: {
    deleted: (state, action) => {
      return state.filter(task => task.id !== action.payload.id)
    },
    added: (state, action) => {
      const newTask = {
        name: action.payload.name,
        id: action.payload.id,
        completed: false
      }
      state.push(newTask);
    },
    toggled: (state, action) => {
      const taskToUpdate =  state.find(task => task.id === action.payload.id)
      taskToUpdate.isCompleted = !taskToUpdate.isCompleted;
    },
  },
})

// Action creators are generated for each case reducer function
export const { deleted, added, toggled } = taskSlice.actions

export default taskSlice.reducer