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
        <h2>
          Samedi 21 Mars 2026
        </h2>
        <h1>
            Nous nous marions <br />
            <span className="names">Kesia & Franck <br/> ( KeeF ) </span>
        </h1>
      </div>
    </section>
  )
}