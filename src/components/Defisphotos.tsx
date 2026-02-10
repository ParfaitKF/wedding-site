import { useRef, useState } from 'react'
import './DefisPhotos.css'

export default function DefisPhotos() {

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <section id="photos" className="main-section">
      <h2 className="DefisPhotos-title">Défis photos</h2>

      <p className="DefisPhotos-text">
        Attrapez votre smartphone et aidez-nous à saisir l’ambiance de la journée
        en prenant vos plus beaux clichés.
      </p>

      <ul className="DefisPhotos-list">
        <li>Des mariés qui sourient</li>
        <li>D’un bisou des mariés</li>
        <li>Des invités de votre table</li>
        <li>D’un couple qui danse</li>
        <li>De la pièce montée</li>
      </ul><br/><br/>

      <div
        className="DefisPhotos-dropzone"
        onClick={() => inputRef.current?.click()}
      >
        <p>
          Essayez de glisser des photos ici, ou cliquez pour sélectionner des
          fichiers à télécharger.
        </p>

        <p className="DefisPhotos-info">Les photos ne doivent pas dépasser 20Mb.</p>

        <button type="button">Télécharger</button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
        />
      </div>
    </section>
  )
}