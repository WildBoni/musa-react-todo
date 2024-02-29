import { createSlice } from '@reduxjs/toolkit'
// lo stato dell'applicazione viene inizializzato con i task recuperati da localStorage (o con un array vuoto)
let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
// I reducers vengono gestiti in una slice
export const taskSlice = createSlice({
  name: 'tasks',
  initialState: storedTasks,
  // qui dentro creo tutti i reducers
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

// Devo esportare tutti i miei reducers per creare le azioni per il dispatch
export const { deleted, added, toggled } = taskSlice.actions

export default taskSlice.reducer