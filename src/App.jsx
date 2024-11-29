import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <header>
        Header
      </header>
      <div className='app'>
      <nav>
        Nav
      </nav>
      <Outlet/>
      </div>
            
    </>
  )
}

export default App
