import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Czar from './components/czar'
import Czar2 from './components/czar2'
import Czar3 from './components/czar3'
import Click from './components/button'
import Sum from './components/sum'
import Multi from './components/multi'
import Alert from './components/alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Czar/>
      <Czar2/>
      <Czar3/>
      <Click/>
      <Sum/>
      <Multi/>
      <Alert/>
    </>
  )
}

export default App
