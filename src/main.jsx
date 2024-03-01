import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

export const MyContext = createContext("");

const data = {
  fname: "Pankaj",
  lname: "Sharma"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyContext.Provider value={data} >
      <App />
    </MyContext.Provider>
  </BrowserRouter>
)
