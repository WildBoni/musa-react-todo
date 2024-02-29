// reducer: funzione che accetta due parametri:
// lo stato corrente (i miei task)
// l'azione che contiene i dettagli per modificare lo stato

/* action = {
  type: 'added',
  name: 'studia JS',
  id: 'dsaffdsaafds',
  completed: false
}*/

/* action = {
  type: 'deleted',
  id: 'dfasfadsfads'
}*/

export default function taskReducer(tasks, action) {
  // aggiorno lo stato in base all'azione e al suo payload
  switch(action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          name: action.name,
          id: action.id,
          completed: false
        }
      ]
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id)
    }
    case 'toggled': {
      return tasks.map((task) => {
        // trovo il task con l'id che voglio modificare
        if(task.id === action.id) {
          // lo aggiorno copiando l'oggetto e cambiando il valore della proprietà isCompleted
          return {...task, isCompleted: !task.isCompleted}
        }
        // ritorno il task aggiornato
        return task;
      })
    }
  }
}