import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from "./Redux/store";
import { Provider } from "react-redux";

const styles: string = `
  * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <style> {styles} </style>
    <App />
  </Provider>
)
