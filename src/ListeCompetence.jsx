import "./scss/ListeCompetence.scss";
import Competence from './Competence';
import tabCompetence from "./data/competence.json";

export default function ListeCompetence(props) {

  return (
    <div className="ListeCompetence" id="listeCompetence">
      <h1>Compétences</h1>

      {/* <h2 className="analyse">Langages informatiques</h2>
      <h3 className="appli">Applications</h3> */}
      <ul className="Liste">
      {
        tabCompetence.map( 
          dossier =>  <li><Competence key={dossier.id} {...dossier} /></li>
        )
      }
      
    </ul>

     
    </div>
  );
}