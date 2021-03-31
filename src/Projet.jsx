import { useState } from 'react';
import "./ListeProjet"
import "./scss/Projet.scss"
import React from 'react';
import { GrClose } from 'react-icons/gr';



export default function Projet({ id, nom, lien, description }) {

  const [menuOuvert, setMenuOuvert] = useState(false);
  const iconStyles = { color: "white", fontSize: "1.5em" };




  return (
    <article className="Projet" >

      <div className="couverture" onClick={() => setMenuOuvert(!menuOuvert)} >
        <img src={`images/${id}.png`} alt={id} />
      </div>
      <h2>{nom}</h2>



      <div className="info" >


        {menuOuvert && (<div className="boite" >
          <div><img className="imgInterieur" src={`images/${id}.png`} alt={id} /> <a href={lien}>Lie</a></div>
          <GrClose className="close" onClick={() => setMenuOuvert(!menuOuvert)} style={iconStyles} />
          <h1>{nom}</h1>
          <p className="description" >{description}</p>
        </div>)}

      </div>

    </article>
  );
}