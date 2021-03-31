import "./scss/ListeCompetence.scss";
import Competence from './Competence';
import tabCompetence from "./data/competence.json";
import tabApplication from "./data/applications.json";
import React from "react"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ListeCompetence(props) {

  // utilisation de la librairie keen-slider  pour le carousel

  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [pause2, setPause2] = React.useState(false)
  const timer2 = React.useRef()

  //---------------------- configuration du carousel #1 -------------------------//
  const [sliderRef, slider] = useKeenSlider({

    slidesPerView: 3,
    spacing: 14,
    initial: 0,
    loop: true,

    duration: 3000,
    breakpoints: {
      ' (max-width: 768px)': {
        slidesPerView: 1,
        spacing: 15,
      },

    },
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })



 //---------------------- carousel automatique #1 -------------------------//

//  Arrêter la lecture automatique lorsque nous survolons les éléments
  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)

    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  //---------------------- configuration du carousel #2 -------------------------//

  const [sliderRef2, slider2] = useKeenSlider({
    slidesPerView: 3,
    spacing: 14,
    initial: 0,
    rtl: true,
    loop: true,
    duration: 3000,
    breakpoints: {
      ' (max-width: 768px)': {
        slidesPerView: 1,
        spacing: 15,
      },
      dragStart: () => {
        setPause2(true)
      },
      dragEnd: () => {
        setPause2(false)
      },
    }
  })

  // Carousel automatique 2

  //  Arrêter la lecture automatique lorsque nous survolons les éléments
  React.useEffect(() => {
    sliderRef2.current.addEventListener("mouseover", () => {
      setPause2(true)
    })
    //  Rependre la lecture automatique lorsque nous quitons l'élément
    sliderRef2.current.addEventListener("mouseout", () => {
      setPause2(false)
    })
  }, [sliderRef2])


  React.useEffect(() => {
    timer2.current = setInterval(() => {
      if (!pause2 && slider2) {
        slider2.next()
      }
    }, 3000)
    return () => {
      clearInterval(timer2.current)
    }
  }, [pause2, slider2])



  return (
    <div className="ListeCompetence" id="listeCompetence">

      <h1>Compétences</h1>

      <ul ref={sliderRef} className="Liste">
        {
          tabCompetence.map(
            dossier =>

              <div class="carousel-cell keen-slider__slide">
                <li><Competence key={dossier.id} {...dossier} /></li> </div>
          )
        }


      </ul>


      <ul ref={sliderRef2} className="Liste2">
        {
          tabApplication.map(
            dossier =>
              <div class="carousel-cell keen-slider__slide">
                <li><Competence key={dossier.id} {...dossier} /></li></div>
          )
        }


      </ul>

    </div>
  );
}