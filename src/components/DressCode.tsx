import './DressCode.css'

export default function DressCode() {
  return (
    <section id="DressCode" className="main-section">
      <h1 className="DressCode-title">DressCode</h1>

      <div className="DressCode-grid">
        Votre présence est ce qu’il y a de plus important pour nous !
        Cependant, nous serons très reconnaissants si vous respectez le code couleur de notre mariage.
        <img 
        src="/images/DressCode.png"
        alt='Dress code'
        className='image-colors'></img>
      </div>
    </section>
  )
}