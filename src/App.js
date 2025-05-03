import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Pricing from './pages/Pricing';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2023 Mentisera. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;