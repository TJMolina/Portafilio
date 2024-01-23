import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

// Pages

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

// Components

import Navbar from './components/Navbar'
import Socials from './components/Socials'

function App() {

  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <div className="socials">
        <Socials />
        </div>
    </div>
  )
}

export default App
