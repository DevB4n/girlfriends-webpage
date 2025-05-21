import React from "react";
import ReactDOM from 'react-dom/client'
import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'



export const Tittles = ({text}) => {
    return (<React.Fragment>
        <div className='tittles'>
            <h1>{text}</h1>
        </div>
    </React.Fragment>)
}

export const StarterBanner = ({text}) =>{
    return(<React.Fragment>

        <div className="starterBanner">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <h1>{text}</h1>
        </div>

    </React.Fragment>)
}



export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);  // 1 = derecha, -1 = izquierda

  const handleNext = () => {
    setDirection(1); // 1 para dirección derecha
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setDirection(-1); // -1 para dirección izquierda
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}  // Animación de entrada
          animate={{ opacity: 1, x: 0 }}  // Animación cuando aparece
          exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}  // Animación cuando desaparece
          transition={{ duration: 0.5 }}  // Duración de la transición
        />
      </AnimatePresence>

      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export const TemplatePhoto = ({PhotoUrl,Tittle, Text}) =>{
  
  return(<div className='PhotoContainer'>
    <video controls  className="Photo">
      <source src={PhotoUrl} type='video/mp4'></source>
    </video>
    <h1 className="PhotoTittle">{Tittle}</h1>
    <p className='PhotoText'>{Text}</p>
  </div>)
}

export const TemplatePhoto2 = ({PhotoUrl,Tittle, Text}) =>{
  
  return(<div className='PhotoContainer2'>
    <video controls className="Photo2">
      <source src={PhotoUrl} type='video/mp4'></source>
    </video>
    <h1 className="PhotoTittle2">{Tittle}</h1>
    <p className='PhotoText2'>{Text}</p>
  </div>)
}