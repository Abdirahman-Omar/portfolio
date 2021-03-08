import "./scss/BasDePage.scss";
import { SiMicrosoftoutlook } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'


export default function BasDePage(props) {
  const annee = (new Date()).getFullYear();

  return (
    <div className="BasDePage" id="basDePage">
      <h1>Coordonnées</h1>
      <div className="medias">
        <a href="https://www.linkedin.com/in/abdirahman-omar-82a4781ba/" className="linkedin"> <FaLinkedin size={50} color="black" />: Abdirahman Omar</a>
        <a href="https://outlook.live.com/owa/" className="outlook"> <SiMicrosoftoutlook size={50} color="blue" />: omara34@outlook.com</a>
        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="gmail" > <SiGmail size={50} color="red" />: abdirahmano217@gmail.com</a>
      </div>

      <p className="Droit" > &copy; {annee} Abdirahman Omar- Tous droits réservés</p>

    </div>
  );
}