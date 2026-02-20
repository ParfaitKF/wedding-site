import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className={`nav-links ${open ? 'active' : ''}`}>
        <a href="#infos">Informations</a>
        <a href="#Ourstory">Notre Histoire</a>
        <a href="#photos">Défis photos</a>
      </div>
      <div 
        className = 'hamburger'
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
      <a href="#rsvp" className="nav-cta">
        Confirmer ma présence
      </a>
    </nav>
  )
}