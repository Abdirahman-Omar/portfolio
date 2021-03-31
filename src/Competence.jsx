import { useState } from 'react';
import "./ListeCompetence"
import "./scss/Competence.scss"


export default function Competence({ id, nom, couleur, description }) {

  const [menuOuvert, setMenuOuvert] = useState(false);
console.log("Ouvert" ,menuOuvert)
  return (
    <article className="Competence" onClick={() => setMenuOuvert(!menuOuvert)}>
      <div className="couverture" >
        <img src={`images/${id}.png`} alt={id} />
      </div>
      <h2 >{nom}</h2>
      <div className="info">
      
        {/* {menuOuvert && (<div className="boite">
          <img className="imgInterieur" src={`images/${id}.png`} alt={id} />
          <GrClose className="close" onClick={() => setMenuOuvert(!menuOuvert)} size={50} />
          <h1>{nom}</h1>
          <p className="description" style={{ backgroundColor: couleur }}>{description}</p>
        </div>)} */}

      </div>
    </article>
    
  );
}