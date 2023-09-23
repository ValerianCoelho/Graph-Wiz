import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const styles: string = `
  * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <style> {styles} </style>
    <App />
  </React.StrictMode>
)
