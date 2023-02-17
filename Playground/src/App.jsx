import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from "./page/Home/Home"
function App() {

  return (
<>
      <Nav />
      <main className="min-h-screen">
      


        <Routes>
          <Route path="/" element={<Home/>} />
       </Routes>
      
      </main>
      <Footer/>
</>
  )
}

export default App
