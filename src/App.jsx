import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Stream from './pages/Stream'
import Pricing from './pages/Pricing'
import LearningDashboard from './pages/LearningDashboard'
import './App.css'

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        <Header onAuthButtonClick={() => setIsAuthModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<LearningDashboard />} />
        </Routes>
        {isAuthModalOpen && (
          <AuthModal onClose={() => setIsAuthModalOpen(false)} />
        )}
      </div>
    </Router>
  )
}

export default App