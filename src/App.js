import React from 'react';
import { BrowserRouter as Rounter, Routes, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

import './App.css'

function App() {
  return(
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Router>
            <Route path ="/" element={<Home />} />
            <Route path ="/about" element={<About/>} />
            <Route path ="/skills" element={<Skills/>} />
            <Route path ="projects" element={<Projects/>}/>
            <Route path ="/experience" element={<Experience/>}/>
            <Route path ="/hobbies" element={<Hobbies/>}/>
            <Route path ="/contact" element={<Contact/>}/>
          </Router>
        </main>
      </div>
    </Router>
  )
}

export default App;