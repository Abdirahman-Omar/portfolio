import "./scss/BasDePage.scss";
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si'

export default function BasDePage(props) {
  const annee = (new Date()).getFullYear();

  return (
    <footer className="BasDePage" id="basDePage">
  
      <div className="medias" >
        <a href="https://www.linkedin.com/in/abdirahman-omar-82a4781ba/"  className="linkedin" > <FaLinkedin size={50}  color="black" /></a>
        <a href="mailto:omara34@outlook.com" className="outlook"> <MdEmail size={50} color="black" /></a>
        <a href="https://github.com/Abdirahman-Omar" className="github"> <SiGithub  size={50} color="black" /></a>
      </div>

      <p className="Droit" > &copy; {annee} Abdirahman Omar- Tous droits réservés</p>

    </footer>
  );
}