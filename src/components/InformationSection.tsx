import './InformationSection.css'

export default function InformationSection() {
  return (
    <section id="infos" className="main-section">
      <h2 className="info-title">Informations</h2>

      <div className="info-grid">
        <img
          src="/images/info.jpeg"
          alt="Kesia & Frank"
          className="info-image"
        />

        <div className="info-content">
          <h3>Ceremonie Civile</h3>
          <p className="info-date">23 Mars 2026</p>
          <p className="info-time">4:00 PM</p>

          <p className="info-location">
            Temple, Black Rock City, NV, USA 01234
          </p>

          <div className="info-links">
            <a href="#">View Map</a>
            <a href="#">Add to Calendar</a>
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
          <h3>Ceremonie Civile</h3>
          <p className="info-date">23 Mars 2026</p>
          <p className="info-time">4:00 PM</p>

          <p className="info-location">
            Temple, Black Rock City, NV, USA 01234
          </p>

          <div className="info-links">
            <a href="#">View Map</a>
            <a href="#">Add to Calendar</a>
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
    </section>
  )
}