import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './Components/Books'
import NavBar from './Components/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
     <Books/>
    </div>
  )
}

export default App
