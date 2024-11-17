import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name:"hjjdgsj",
  age:68
}

let arr =[9999,88];

  return (
    <>
 <h1 className='bg-green-400 text-black p-4 rounded'>tailwind test</h1>
 <Card channel="cardProp" btntext="click on" someobj={myObj} />
 <Card channel="cardProp"  someobj={arr} />
 <div className='memory'>
  <h3>The memory</h3>
 </div>
    </>
  )
}

export default App
