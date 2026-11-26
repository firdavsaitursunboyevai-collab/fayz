import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Menyuu from './pages/Menyu/Menyuu'
import About from './pages/About/About'
import Desert from './pages/Desert/desert'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <BrowserRouter>
      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menyuu />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
