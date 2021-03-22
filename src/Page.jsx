import './scss/Page.scss';
import Entete from './Entete';
import Introduction from './Introduction';
import ListeCompetence from './ListeCompetence';
import ListeProjet from './ListeProjet';
import BasDePage from './BasDePage'

export default function Page() {
  return (
    <div className="Page">
          <ul class="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
          </ul>

       <Entete></Entete>
       <Introduction/>
       <ListeCompetence/>
       <ListeProjet/>
       <BasDePage></BasDePage>
    </div>
  );
}
