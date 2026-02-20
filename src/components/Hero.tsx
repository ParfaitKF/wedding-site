import { useEffect, useState } from 'react'
import './Hero.css'

const images = [
  '/images/hero1.jpeg',
  '/images/hero2.jpeg',
  '/images/hero3.jpeg'
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="overlay">
        <div style={{display: 'flex', flexDirection: 'column'}}>
          Samedi 21 Mars 2026
          <span style={{fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold'}}>Nous nous marions</span>
          <span className="names">Kesia & Franck <br/> <span style={{color : '#F7BD16'}}>( KeeF )</span></span>
        </div>
        <img className="border-deco" src="./images/Stroke-wedding-decoration.png"/>
      </div>
    </section>
  )
}