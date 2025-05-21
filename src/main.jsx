import React from "react";
import ReactDOM from 'react-dom/client'

import { TemplatePhoto,TemplatePhoto2,StarterBanner,Carousel} from "./components/app";


//videos import


import caracoli from '../src/media/videos/caracoli.mp4'
import noria from '../src/media/videos/noria.mp4'
import noria_fondo from '../src/media/videos/noria_fondo.mp4'
import la_flora from '../src/media/videos/la_flora.mp4'

const root = ReactDOM.createRoot(document.getElementById('root'))

//carousel images

const images = [
  "https://devb4n.github.io/girlfriends-webpage/src/media/imgs/atanasio.jpeg",
  "https://devb4n.github.io/girlfriends-webpage/src/media/imgs/cajasan.jpeg",
  "https://devb4n.github.io/girlfriends-webpage/src/media/imgs/grado_amor.jpeg",
  "https://devb4n.github.io/girlfriends-webpage/src/media/imgs/parque_agua.jpeg",
  "https://devb4n.github.io/girlfriends-webpage/src/media/imgs/parque_agua2.jpeg",
  "https://devb4n.github.io/girlfriends-webpage/src/media/imgs/parque_florida.jpeg",
];

root.render(
    <React.Fragment>
        <StarterBanner text='para mamol'/>
        <Carousel images={images}/>
        <TemplatePhoto PhotoUrl={caracoli} Tittle='amiguitos' Text='hola amiguitos' /> 
        <TemplatePhoto2 PhotoUrl={noria} Tittle='mi foto 2' Text='chimba e texto mi papachoo'/>
        <TemplatePhoto PhotoUrl={noria_fondo} Tittle='amiguitos' Text='hola amiguitos' /> 
        <TemplatePhoto2 PhotoUrl={la_flora} Tittle='mi foto 2' Text='chimba e texto mi papachoo'/>
    </React.Fragment> 
)




