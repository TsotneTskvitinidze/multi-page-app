import { useState } from 'react'
import {createBrowserRouter, Route, RouterProvider, Link, BrowserRouter, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import VansPage from './pages/vans/VansPage';


function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/">#VanLife</Link>
        
        <nav>
           <Link to="/about">About</Link>
           <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/vans' element={<VansPage/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
