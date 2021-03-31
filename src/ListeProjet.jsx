import "./scss/ListeProjet.scss";
import Projet from './Projet';

import tabProjet from "./data/projets.json";


export default function ListeProjet(props) {

  return (
    <div className="ListeProjet" id="listeProjet">
       
      <h1>Projets</h1>

    
      <ul className="Liste">
      {
        tabProjet.map( 
          dossier =>  <li><Projet key={dossier.id} {...dossier} /></li>
        )
      }
      
    </ul>
    
    </div>
  );
}