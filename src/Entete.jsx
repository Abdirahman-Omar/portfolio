import './scss/Entete.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

export default function Entete(props) {

  // gestion de l'état du menu mobile 
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [couleur, setCouleur] = useState('#090');

  return (
    <header className="Entete">
      <nav>

        <li class="burger menuCache" onClick={() => setMenuOuvert(!menuOuvert)}><GiHamburgerMenu size={50} /></li>
        <i></i>
        <div class="custom-shape-divider-top-1614716716">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>

        

        <ul className="navUtil">
          <li><a href="#Introduction">Introduction</a></li>
          <li><a href="#listeCompetence">Compétences</a></li>
          <li><a href="#listeProjet"> Projets</a></li>
          <li><a href="#basDePage">Coordonées</a></li>
          <Button onClick={() => setCouleur( couleur)} color="primary"></Button>
        </ul>

        {/* on ouvre ou on ferme le menu selon l'état */}
        {menuOuvert && (<div className="leMenu">
          <ul className="navMobile">

            <li><a href="#Introduction" onClick={() => setMenuOuvert(!menuOuvert)}>Introduction</a></li>
            <li><a href="#listeCompetence" onClick={() => setMenuOuvert(!menuOuvert)}>Compétences</a></li>
            <li><a href="#listeProjet" onClick={() => setMenuOuvert(!menuOuvert)}> Projets</a></li>
            <li><a href="#basDePage" onClick={() => setMenuOuvert(!menuOuvert)}>Coordonnées</a></li>
          </ul>
        </div>)}

      </nav>
    </header>
  );

}

