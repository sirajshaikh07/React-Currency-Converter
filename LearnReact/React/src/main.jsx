import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PasswordGen from './components/PasswordGen.jsx'
import Testing from './hooks/Testing.jsx'
import InputBox from './components/InputBox.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    {/* <Testing/> */}
    <InputBox/>
  </React.StrictMode>,
)
