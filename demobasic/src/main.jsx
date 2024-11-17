// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  //react implementation virtual dom

// import App from './App.jsx'


function App(){
  return (
    <div>
      <h1>the jkdbk</h1>
    </div>
  )
}
const takla = "takla is more takla";

const element = (
  <p>most guh {takla}</p>

)

createRoot(document.getElementById('root')).render(
  element

)
