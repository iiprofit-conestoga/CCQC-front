import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/Login.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
   <LoginPage />
  </StrictMode>,
)
