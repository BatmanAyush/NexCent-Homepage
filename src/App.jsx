import React from 'react'
import Navbar from './components/Navbar'
import'./index.css'
import Hero from './components/Hero'
import Main from './components/Main'
import Widgets from './components/Widgets'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='main-content'>
     <Navbar/>
     <Hero/>
     <Main/>
     <Widgets/>
    
    </div>
  )
}

export default App
