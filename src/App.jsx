
import { Fragment } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Work from './components/Work'
import Services from './components/Services'



function App() {

  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </NextUIProvider>

  )
}

export default App
