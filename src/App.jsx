import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Overlay from './Overlay'
import CamcamOverlay from './CamcamOverlay'
import './App.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<div className="app"><Overlay /></div>} />
        <Route path="/camcam" element={<div className="app"><CamcamOverlay /></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
