import { useState } from 'react'
import './App.css'
import { Records } from './Records'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + Compiler</h1>
      <div className='card'>
        <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
      </div>
      <Records />
    </>
  )
}

export default App
