import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Wellness from './pages/Wellness'
import Business from './pages/Business'
import Tech from './pages/Tech'
import DevLog from './pages/DevLog'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <div className="hero"> Maya N. Huggins-Jordan | Sales Development Representative </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wellness">Wellness</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/tech">Tech</Link></li>
          <li><Link to="/devlog">DevLog</Link></li>
          <li><a href="https://www.linkedin.com/in/maya-jordan-0b4303176/" target="_blank" rel="noopener noreferrer"> LinkedIn</a></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
      <div className="container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/business" element={<Business />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/devlog" element={<DevLog />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
