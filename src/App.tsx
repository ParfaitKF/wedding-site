import { useState } from 'react'
import './App.css'
import { supabase } from './lib/supabase'

function App() {
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const guest = {
      full_name: formData.get('name') as string,
      email: formData.get('email') as string,
      attending: formData.get('attending') === 'yes',
      plus_one: formData.get('plus_one') === 'on'
    }

    const { error } = await supabase
      .from('guests')
      .insert([guest])

    if (error) {
      console.error(error)
      setResult('Erreur lors de l’enregistrement ❌')
      return
    }

    setResult(
      guest.plus_one
        ? 'Présence confirmée avec +1 🎉'
        : 'Présence confirmée ✅'
    )

    form.reset()
  }

  return (
    <main style={{ padding: '2rem', maxWidth: 480 }}>
      <h1>RSVP — Kesia & Frank</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nom complet"
          required
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
        />

        <select name="attending" required>
          <option value="">Serez-vous présent ?</option>
          <option value="yes">Oui</option>
          <option value="no">Non</option>
        </select>

        <label style={{ display: 'block', marginTop: '1rem' }}>
          <input type="checkbox" name="plus_one" /> Je viens avec un invité
        </label>

        <button type="submit" style={{ marginTop: '1rem' }}>
          Envoyer
        </button>
      </form>

      {result && <p style={{ marginTop: '1rem' }}>{result}</p>}
    </main>
  )
}

export default App