import './InformationSection.css'

export default function InformationSection() {
  return (
    <>
      <section id="infos" className="main-section color-section">
        <h1 className="info-title">Informations</h1>
        <div className="info-grid">
          <div className="info-content">
            <h3>
              Dote ● 18 Mars 2026 ● 13h-16h
            </h3>
            <p className='titre-sous-section'>Loum Carrefour CAMOCO et ensuite prendre la moto Quartier 202 au niveau de l'internat</p>
            <div className='parcours'>
              <ul>
                <b>Venant de Yaoundé</b>
                <li className='indication-parcours'>Yaoundé–Nkonssamba</li>
                <li className='indication-parcours'>ensuite Nkonssamba–Loum (rond point Décidé)
                Prévoir 15 000 FCFA aller et retour.</li>
              </ul>
              <ul>
                <b>Venant de Douala</b>
                <li className='indication-parcours'>Douala–Loum
                Prévoir 5000 FCFA aller et retour.</li>
              </ul>
              <ul>
                <b>Venant de Bafoussam</b>
                <li className='indication-parcours'>Bafoussam–Loum
                Prévoir 10 000 FCFA aller et retour.</li>
              </ul>
            </div>

            <div className="info-links">
              <a 
              href="#"
              className='icon-button'>
                Voir la carte
                <img src="./images/location_on.svg" width="24" height="24"/></a>
              <a className='icon-button'
                href="//www.google.com/calendar/render?action=TEMPLATE&text=Dote+Kesia+et+Franck&dates=20260323T130000/20260323T160000&details=Dote+Kesia+et+Franck&location=Loum"
                target="_blank"
                rel="noopener noreferrer"
              > Ajouter au calendrier 
              <img src="./images/Calendar.svg" width="24" height="24"/></a>
            </div>

            <a href="#rsvp" className="info-cta">
              Confirmer ma présence
            </a>
          </div>
          <img
              src="/images/image heart-1.png"
              alt="Kesia & Frank"
              className="info-image"
          />
        </div>
      </section>
      <section id="infos-2" className="main-section">
        <br/>
        <br/>
        <div className="info-grid">
          <img
            src="/images/hexagone-photo1.png"
            alt="Kesia & Frank"
            className="info-image"
          />
          <div className="info-content">
            <h3>Ceremonie Civile</h3>
            <p className="info-date">21 Mars 2026</p>
            <p className="info-time">08:30</p> 

            <p className="info-location">
              Mairie de Yaoundé 3 effoulan
            </p>

            <div className="info-links">
              <a href="#" className='icon-button'>Voir la carte <img src="./images/location_on.svg" width="24" height="24"/></a>
              <a className='icon-button'
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Mariage+Kesia+%26+Frank&dates=20260323T083000/20260323T220000&details=Mariage+Civil+:+08h30%0AB%C3%A9n%C3%A9diction+nuptiale+:+13h-16h%0ACoktail+:+17h-22h&location=Aum%C3%B4nerie+Protestante+Universitaire+(APU),+VG32%2B3Q5,+Yaound%C3%A9,+Cameroon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajouter au calendrier
                <img src="./images/Calendar.svg" width="24" height="24"/>
              </a>
            </div>

            <a href="#rsvp" className="info-cta">
              Confirmer ma présence
            </a>
          </div>
        </div>
      </section>
      <section id="infos3" className="main-section color-section">
        <div className="info-grid">
          <div className="info-content">
            <h3>Bénédiction nuptiale</h3>
            <p className="info-date">21 Mars 2026</p>
            <p className="info-time">13h-16h</p>

            <div className="info-location">
              <b>APU ( Aumonerie Protestante Universitaire )</b>
              <b>Venant de la Cité-U :</b>
              <p className='indication-parcours'>
                prendre la route en pavées en face de la cité universitaire,
                continuer tout droit jusqu'au carrefour tourner à droite avancer de 100m jusqu'à voir
                l'église avec un portail noir.
              </p>
              <b>Venant du Cradat :</b>
              <p className='indication-parcours'>
                prendre la route en pavées du cradat, suivre la route en pavées jusqu'à
                ( descendre la coline puis remonter la grande colline ) jusqu'à voir un grand temple avec un portail noir.
              </p>
              </div>

            <div className="info-links">
              <a 
              href="https://maps.app.goo.gl/WYSj1rfrpyxzZotY6" 
              target='_blank'
              rel = "noopener noreferrer"
              className='icon-button'>
                Voir la carte 
                <img src="./images/location_on.svg" width="24" height="24"/>
              </a>
              <a className='icon-button'
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Mariage+Kesia+%26+Frank&dates=20260323T083000/20260323T220000&details=Mariage+Civil+:+08h30%0AB%C3%A9n%C3%A9diction+nuptiale+:+13h-16h%0ACoktail+:+17h-22h&location=Aum%C3%B4nerie+Protestante+Universitaire+(APU),+VG32%2B3Q5,+Yaound%C3%A9,+Cameroon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajouter au calendrier
                <img src="./images/Calendar.svg" width="24" height="24"/>
              </a>
            </div>

            <a href="#rsvp" className="info-cta">
              Confirmer ma présence
            </a>
          </div>
          <img
              src="/images/image heart-2.png"
              alt="Kesia & Frank"
              className="info-image"
          />
        </div>
      </section>
      <section id="infos3" className="main-section">
        <div className="info-grid">
          <img
            src="/images/hexagone-photo2.png"
            alt="Kesia & Frank"
            className="info-image"
          />

          <div className="info-content">
            <h3>Coktail</h3>
            <p className="info-date">21 Mars 2026</p>
            <p className="info-time">17h - 22h</p>

            <p className="info-location">
              APU ( Aumonerie Protestante universitaire )
            </p>

            <div className="info-links">
              <a 
              href="https://maps.app.goo.gl/WYSj1rfrpyxzZotY6" 
              target='_blank'
              rel = "noopener noreferrer"
              className='icon-button'>
                Voir la carte 
                <img src="./images/location_on.svg" width="24" height="24"/>
              </a>
              <a className='icon-button'
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=Mariage+Kesia+%26+Frank&dates=20260323T083000/20260323T220000&details=Mariage+Civil+:+08h30%0AB%C3%A9n%C3%A9diction+nuptiale+:+13h-16h%0ACoktail+:+17h-22h&location=Aum%C3%B4nerie+Protestante+Universitaire+(APU),+VG32%2B3Q5,+Yaound%C3%A9,+Cameroon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajouter au calendrier
                <img src="./images/Calendar.svg" width="24" height="24"/>
              </a>
            </div>

            <a href="#rsvp" className="info-cta">
              Confirmer ma présence
            </a>
          </div>
        </div>
      </section>
    </>
  )
}