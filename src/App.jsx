import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Menyuu from './pages/Menyu/Menyuu'
import About from './pages/About/About'

function App() {
  return (
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menyuu />} />
          <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
