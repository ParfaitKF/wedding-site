import './InformationSection.css'

export default function InformationSection() {
  return (
    <section id="infos" className="main-section">
      <h2 className="info-title">Informations</h2>

      <div className="info-grid">
        <div className="info-content">
          <h3>Dote</h3>
          <p className="info-date">14 Mars 2026</p>
          <p className="info-time">13h-16h</p>
          <p className="info-location">
            <b>Loum Carrefour CAMOCO et ensuite prendre la moto Quartier 202 au niveau de l'internat</b>
            <div className='parcours'>
              <ul>
              <b>Venant de Yaoundé</b>
              <li className='indication-parcours'>Yaoundé–Douala</li>
              <li className='indication-parcours'>ensuite Douala–Loum (rond point Décidé)
              Prévoir 13 000 FCFA aller et retour.</li>
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
          </p>

          <div className="info-links">
            <a href="#">Voir la carte</a>
            <a href="#">Ajouter au calendrier</a>
          </div>

          <a href="#rsvp" className="info-cta">
            Confirmer ma présence
          </a>
        </div>
        <img
            src="/images/info.jpeg"
            alt="Kesia & Frank"
            className="info-image"
        />
      </div>
      <br/>
      <br/>
      <div className="info-grid">
        <img
          src="/images/info2.jpeg"
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
            <a href="#">Voir la carte</a>
            <a href="#">Ajouter au calendrier</a>
          </div>

          <a href="#rsvp" className="info-cta">
            Confirmer ma présence
          </a>
        </div>
      </div>
      <br />
      <br />
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
            <a href="#">Voir la carte</a>
            <a href="#">Ajouter au calendrier</a>
          </div>

          <a href="#rsvp" className="info-cta">
            Confirmer ma présence
          </a>
        </div>
        <img
            src="/images/info3.jpeg"
            alt="Kesia & Frank"
            className="info-image"
        />
      </div>
      <br/>
      <br/>
      <div className="info-grid">
        <img
          src="/images/info4.jpeg"
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
            <a href="#">Voir la carte</a>
            <a href="#">Ajouter au calendrier</a>
          </div>

          <a href="#rsvp" className="info-cta">
            Confirmer ma présence
          </a>
        </div>
      </div>
    </section>
  )
}