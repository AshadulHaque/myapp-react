 import React, { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import Contact from './Contact'
import About from './About'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage';



function App() {
  const [page, setPage] = useState('Home')

  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setPage('Home')}>Home</button>
        <button onClick={() => setPage('Profile')}>Profile</button>
        <button onClick={() => setPage('Contact')}>Contact</button>
        <button onClick={() => setPage('About')}>About</button>
        <button onClick={() => setPage('Dashboard')}>Dashboard</button>
        <button onClick={() => setPage('Login')}>LoginPage</button>
      </nav>
      {page === 'Home' && <Home />}
      {page === 'Profile' && <Profile />}
      {page === 'Contact' && <Contact />}
      {page === 'About' && <About />}
      {page === 'Dashboard' && <Dashboard />}
      {page === 'Login' && <LoginPage />}
    </>
  )
}

export default App