import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#infos">Informations</a>
        <a href="#story">Notre Histoire</a>
        <a href="#photos">Défis photos</a>
      </div>

      <a href="#rsvp" className="nav-cta">
        Confirmer ma présence
      </a>
    </nav>
  )
}