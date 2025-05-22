import React from "react";
import ReactDOM from 'react-dom/client'

import { TemplatePhoto,TemplatePhoto2,StarterBanner,Carousel} from "./components/app";

import audioMichael from '../src/media/audios/michael-giacchino-01-1m1-bundle-of-joy-inside-out.mp3'

//videos import


import caracoli from '../src/media/videos/caracoli.mp4'
import noria from '../src/media/videos/noria.mp4'
import noria_fondo from '../src/media/videos/noria_fondo.mp4'
import la_flora from '../src/media/videos/la_flora.mp4'

const root = ReactDOM.createRoot(document.getElementById('root'))

//carousel images

import atanasio from '../src/media/imgs/atanasio.jpeg'
import cajasan from '../src/media/imgs/cajasan.jpeg'
import grado_amor from '../src/media/imgs/grado_amor.jpeg'
import parque_agua from '../src/media/imgs/parque_agua.jpeg'
import parque_agua2 from '../src/media/imgs/parque_agua2.jpeg'
import parque_florida from '../src/media/imgs/parque_florida.jpeg'

const images = [
  atanasio,
  cajasan,
  grado_amor,
  parque_agua,
  parque_agua2,
  parque_florida,
]


root.render(
    <React.Fragment>
        <StarterBanner url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSt9GQdKv2M-uxbq5hPe2OBReHipVnTA3gXA&s' src={audioMichael} text='los mejores momentos los paso contigo'/>
        <Carousel images={images}/>
        <TemplatePhoto PhotoUrl={caracoli} Tittle='lindo' Text='que lindos nos vemos <3.' /> 
        <TemplatePhoto2 PhotoUrl={noria} Tittle='la noria' Text='fue bacano y bastante lindo,a  pesar de no ser el mas extremo  fue el que mas disfrute.'/>
        <TemplatePhoto PhotoUrl={noria_fondo} Tittle='noria de fondo' Text='ya casi nos tocaba irnos, asi que disfrute lo lindo que fue estar contigo ese tiempo.' /> 
        <TemplatePhoto2 PhotoUrl={la_flora} Tittle='yo un cantautor' Text='nada que decir, simplemente bacanisimo comer cositas simples caminar tocarte la guitarra y ver la naturaleza, una de mis favoritas.'/>
    </React.Fragment> 
)




