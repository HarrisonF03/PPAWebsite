import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/Pages/About/About'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Gallery from './Components/Slider/Slider'
import Title from './Components/Title/Title'
import Social from './Components/Social/Social'
import Contact from './Components/Pages/Contact/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<>
            <Hero /><div className="container">
              <Title subTitle='Gallery' title='Happy customers' />
              <Gallery />
            </div></>} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<><Title subTitle='Contact me' /><Contact /></>} />
        </Routes>
        <Social />
      </BrowserRouter>
    </>
  )
}

export default App
