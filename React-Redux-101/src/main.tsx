import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppWithConnected from './App.tsx'
import { appReducer } from './redux/index.ts'

export const store = createStore(appReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithConnected />
    </Provider>
  </React.StrictMode>,
)
