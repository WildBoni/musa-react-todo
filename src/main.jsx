import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* lo store viene messo a disposizione di tutta l'app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
