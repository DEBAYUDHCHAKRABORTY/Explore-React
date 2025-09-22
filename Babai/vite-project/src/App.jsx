import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component/Component'
import Counter from './Component/New-component'
import Component2 from './Component/Component two'
import HelloWorld from './Component/HelloWorld'
import Counter3 from './Component/Counter'
import Alert from './Component/alertComponent'



function App() {


  return (
    <>
      <Component2 />
      <Component />
      <Counter />
      <HelloWorld />
      <Counter3 />
      <Alert/>


    </>
  )
}

export default App
