import './GiftsSection.css'

export default function GiftsSection() {
  return (
    <section id="gifts" className="gifts-section">
      <div className="gifts-container">

        <div className="gifts-image">
          <img src="/images/gifts.jpg" alt="Cadeaux mariage" />
        </div>

        <div className="gifts-content">
          <h2>Dons & Cadeaux</h2>

          <p>
            Votre présence est notre plus beau cadeau.  
            Cependant, si vous souhaitez nous bénir davantage,
            vous pouvez contribuer via les moyens suivants :
          </p>

          <div className="payment-box">
            <h3>Orange Money</h3>
            <p>+237 6 XX XX XX XX</p>
          </div>

          <div className="payment-box">
            <h3>MTN MoMo</h3>
            <p>+237 6 XX XX XX XX</p>
          </div>
        </div>

      </div>
    </section>
  )
}