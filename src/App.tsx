import React from 'react'
import './App.css'
import Counter from './Counter'

const App = () => {
  return (
    <div className="App">
      <h1>React App ! - {process.env.NODE_ENV}</h1>
      <h2>{process.env.NAME}</h2>
      <Counter />
    </div>
  )
}

export default App
