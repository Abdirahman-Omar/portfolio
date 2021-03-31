import "./scss/Introduction.scss";


export default function Introduction(props) {

  return (
    <div className="Intro" id="Introduction">
      <h1>Salut!</h1>
      <p className="description">Je m'appelle Abdirahman Omar et je suis quelqu'un qui aime créer des projets en lien avec le multimédia. J'ai confiance
      en mon habilité d'apprentissage et je suis
      toujours partant à expérimenter des nouvelles choses. </p>
      
      <div class="bubble x3">
      <img src="images/logo.png" alt=" logo" /> 
      </div>
    </div>
    
  );
}