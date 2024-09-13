import React from 'react'
import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactPage from './pages/contact/ContactPage'
import About from './pages/About/About'
import Services from './pages/servicess/Services'
import DetailPage from './pages/Details/DetailPage'
import Grid from './pages/Grid/Grid'
import Health from './pages/Health/Health'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/:productType" element={<DetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/health" element={<Health/>}/>
      </Routes>
     
      <Footer/>
    </>
  )
}

export default App
