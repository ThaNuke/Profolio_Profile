import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Ex from './components/Ex'
import Why from './components/Why'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />
      <Why />
      <Ex />
    </div>
    
  )
}

export default App
