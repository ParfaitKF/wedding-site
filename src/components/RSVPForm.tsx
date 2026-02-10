import { useState } from 'react'
import { supabase } from '../lib/supabase'
import './RSVPForm.css'

export default function RSVPForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    const { error } = await supabase.from('guests').insert([{
      full_name: data.get('name'),
      email: data.get('email'),
      attending: data.get('attending') === 'yes',
      plus_one: data.get('plus_one') === 'on'
    }])

    if (error) {
      setStatus(error.message)
      return
    }

    setStatus('Présence confirmée ✅')
    e.currentTarget.reset()
  }

  return (
    <section className="main-section rsvp-section">
      <div className="rsvp-card">
        <h2>Confirmer ma présence</h2>
        <p>Nous avons hâte de vous retrouver !
        Si vous venez accompagné(e) ou si vous avez des restrictions alimentaires particulières, merci de bien vouloir le préciser ci-dessous.
        Merci de confirmer votre présence avant le 10 juillet 2025.</p>
        <br/>
        <br/>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Nom complet" required />
          <input name="email" type="email" placeholder="Email" />

          <select name="attending" required>
            <option value="">Présence ?</option>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>

          <label className="rsvp-checkbox">
            <input type="checkbox" name="plus_one" />
            Je viens avec un invité
          </label>

          <button type="submit">Envoyer</button>
        </form>

        {status && <p className="rsvp-status">{status}</p>}
      </div>
    </section>
  )
}
