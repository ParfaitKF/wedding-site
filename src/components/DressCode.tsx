import './DressCode.css'

export default function DressCode() {
  return (
    <section id="DressCode" className="main-section">
      <h2 className="DressCode-title">Dressode</h2>

      <div className="DressCode-grid">
        Votre présence est ce qu’il y a de plus important pour nous !
        Cependant, nous serons très reconnaissants si vous respectez le code couleur de notre mariage.
        Pour les femmes : veuillez vous référer aux couleurs indiquées sur le nuancier
        <img 
        src="/images/DressCode.png"
        alt='Dress code'
        className='image-colors'></img>
      </div>
    </section>
  )
}