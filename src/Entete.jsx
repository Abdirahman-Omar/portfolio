import { useState } from 'react';
import './scss/Entete.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Entete(props) {

  // gestion de l'état du menu mobile 
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    <header className="Entete">
      <nav>

        <a class="burger menuCache" onClick={() => setMenuOuvert(!menuOuvert)}><GiHamburgerMenu size={150} /></a>
        <i></i>
        <div class="custom-shape-divider-top-1614716716">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

        <ul className="navUtil">
          <li><a href="#">Introduction</a></li>
          <li><a href="#">Compétences</a></li>
          <li><a href="#"> Projets</a></li>
          <li><a href="#">Coordonnées</a></li>
        </ul>

        {/* on ouvre ou on ferme le menu selon l'état */}
        {menuOuvert && (<div className="leMenu">
          <ul>

            <li><a href="#">Introduction</a></li>
            <li><a href="#">Compétences</a></li>
            <li><a href="#"> Projets</a></li>
            <li><a href="#">Coordonnées</a></li>
          </ul>
        </div>)}

      </nav>
    </header>
  );

}