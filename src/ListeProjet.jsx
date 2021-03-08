import "./scss/ListeProjet.scss";
import Projet from './Projet';
import tabProjet from "./data/projets.json";

export default function ListeProjet(props) {

  return (
    <div className="ListeProjet">
      <h1>Projets</h1>

      <h2 className="analyse">Développement web</h2>
      <h3 className="jeu">Développement de jeu</h3>
      <h4 className="model">Création 3D</h4>
      <h5 className="design">Design graphique</h5>
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