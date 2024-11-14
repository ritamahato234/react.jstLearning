import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  //react implementation virtual dom

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
