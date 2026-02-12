import { useEffect, useState } from "react";

const weddingDate = new Date('2026-03-23T00:00:00')

export default function CountDouwn() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect (() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime()-now

      if ( distance < 0 ) {
        setTimeLeft('00:00:00:00')
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance/(1000*60*60*24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      const format = (n: number) => n.toString().padStart(2,'0')

      setTimeLeft(
        `${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ padding: '80px 0', textAlign: 'center' }}>
      <h2>Temps restant</h2>
      <h1 style={{ fontSize: '3rem', letterSpacing: '2px' }}>
        {timeLeft}
      </h1>
    </section>
  )
}