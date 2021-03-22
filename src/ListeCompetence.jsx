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
// configuration du carousel
const [sliderRef, slider] = useKeenSlider({
  slidesPerView: 3,
  spacing: 15,
  initial: 0,
  loop: true,
  duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
})

const [sliderRef2] = useKeenSlider({
  slidesPerView: 3,
  spacing: 15,
  initial: 0,
  loop: true,
  duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
})

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

// Carousel 2

// React.useEffect(() => {
//   sliderRef2.current.addEventListener("mouseover", () => {
//     setPause(true)
//   })
//   sliderRef2.current.addEventListener("mouseout", () => {
//     setPause(false)
//   })
// }, [sliderRef2])

// React.useEffect(() => {
//   timer.current = setInterval(() => {
//     if (!pause && slider2) {
//       slider2.next()
//     }
//   }, 3000)
//   return () => {
//     clearInterval(timer.current)
//   }
// }, [pause, slider2])



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