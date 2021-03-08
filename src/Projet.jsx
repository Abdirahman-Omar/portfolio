import { useState } from 'react';
import "./ListeProjet"
import "./scss/Projet.scss"
import { GrClose } from 'react-icons/gr';

export default function Projet({id, nom, couleur, description}) {

  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <article className="Projet" onClick={() => setMenuOuvert(!menuOuvert)}>
      <div className="couverture" >
        <img src={`images/${id}.png`} alt={id} />
      </div>
      <div className="info">
        <h2 style={{backgroundColor:couleur}}>{nom}</h2>

        {menuOuvert && ( <div className="boite">
        <img className="imgInterieur" src={`images/${id}.png`} alt={id}/>
        <GrClose className="close" onClick={() => setMenuOuvert(!menuOuvert)} size={50} />
          <h1>{nom}</h1>
          <p className="description" style={{backgroundColor:couleur}}>{description}</p>
      </div>)}
       
      </div>
    </article>
  );
}