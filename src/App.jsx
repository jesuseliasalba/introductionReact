import { useState } from 'react'
import './App.css'
import showCount from './showCount/showCount'

function App() {
  const [click, setClick] = useState(0)

  return (
    <>
      <div className='primary'>
        <h2>You clicked here {click} time</h2>
        <button onClick={() => {setClick(showCount({number: click, calc:"+"}))}}>Sumar</button>
        <button onClick={() => {setClick(showCount({number: click, calc:"-"}))}}>Restar</button>
      </div>
    </>
  )
}

export default App
