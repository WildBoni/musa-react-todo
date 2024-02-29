import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/taskSlice'
// Lo store è il contenitore di tutto lo stato dell'applicazione
export const store = configureStore({
  /* ogni slice viene importata dentro all'oggetto reducer.
    aggiungiamo una slice chimata tasks e collegata al nostro reducer
    in questo modo tutta l'app potrà leggere l'elenco dei task
    ed effettuare il dispatch delle azioni
  */
  reducer: {
    tasks: taskReducer
  },
})