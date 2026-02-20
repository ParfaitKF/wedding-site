import './GiftSection.css'

export default function GiftsSection() {
  return (
    <section id="gifts" className="gifts-section">
      <div className="gifts-container">

        <div className="gifts-image">
          <img src="/images/gift.png" alt="Cadeaux mariage" />
        </div>

        <div className="gifts-content">
          <h2>Dons & Cadeaux</h2>
          <p>
            À l’occasion de notre mariage,
            votre présence est déjà un merveilleux cadeau.
            Toutefois, si vous souhaitez nous offrir quelque chose,
            le cadeau est libre, selon votre bon plaisir et vos moyens.
            <br/>
            Cadeaux recommendés : Enveloppe avec contribution en especes ou chèques!
          </p>
          <div className='buttons-line'>
            <div className="payment-box">
              <img src="./images/OM.png"/>
              +237 6 72 59 16 49
            </div>
            <div className="payment-box">
              <img src="./images/Momo.png"/>
              +237 6 90 96 79 23
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}