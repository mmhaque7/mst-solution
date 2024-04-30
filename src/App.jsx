
import { Fragment } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'


function App() {

  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </NextUIProvider>

  )
}

export default App
