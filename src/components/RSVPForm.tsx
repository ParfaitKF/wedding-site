import { useState } from 'react'
import { supabase } from '../lib/supabase'
import './RSVPForm.css'

export default function RSVPForm() {
  const [status, setStatus] = useState('')
  const [isAttending, setIsAttending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const ceremonies = data.getAll('ceremonies')

    const { error } = await supabase.from('guests').insert([{
      full_name: data.get('name'),
      email: data.get('email'),
      attending: data.get('attending') === 'yes',
      ceremonies,
    }])

    if (error) {
      setStatus(error.message)
      return
    }

    setStatus('Présence confirmée ✅')
    e.currentTarget.reset()
  }

  return (
    <section id="rsvp" className="main-section rsvp-section">
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

          <select 
          name="attending"
          onChange={(e) => setIsAttending(e.target.value === 'yes')}
          required>
            <option value="" disabled selected hidden>Présence</option>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>

          {isAttending && <div className='hidden-check'>
            <label>
              <input type="checkbox" name="ceremonies" value="Dot" />
              Dot
            </label>

            <label>
              <input type="checkbox" name="ceremonies" value="Mairie" />
              Mairie
            </label>

            <label>
              <input type="checkbox" name="ceremonies" value="Eglise" />
              Église
            </label>

            <label>
              <input type="checkbox" name="ceremonies" value="Soirée" />
              Soirée
            </label>
          </div>}

          <button type="submit">Envoyer</button>
        </form>

        {status && <p className="rsvp-status">{status}</p>}
      </div>
    </section>
  )
}
