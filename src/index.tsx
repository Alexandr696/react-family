import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
