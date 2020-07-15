import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios'

import Description from './description'
import Photo from './photo'

function App() {

const [photo, setPhoto] = useState('')
const [description, setDescription] = useState('')

useEffect(() => {

  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response => {
    console.log(response)
    setPhoto(response.data.hdurl)
    setDescription(response.data.explanation)
  }).catch(err => {
    console.log(`the err was ${err}`)
  })

},[])




  return (
    <div className="AppContainer">
      <h1>Nasa Photo of the Day</h1>
      <Photo photo={photo}/>
      <Description description={description}/>
    </div>
  );
}

export default App;

/* {
    "copyright": "Philipp Salzgeberfoto-webcam.euAdam Block",
    "date": "2020-07-15",
    "explanation": "Comet NEOWISE has been wowing photographers around much of the world during dawn and dusk, at the margins of day and night.  For the most northern residents of planet Earth, however, the comet circles the North Star and never sets. The night part of this circular arc is apparent in the featured composite of images assembled from a webcam located at a ski resort in the Swiss Alps.  Images were selected at 30-minute intervals throughout the night from July 12th -13th. Comet NEOWISE (C/2020 F3) will continue to become more accessible to northern hemisphere observers as its motion places it higher in the sky each evening after sunset over the next few weeks, as it begins its outbound journey.  As with all comets, departure from the inner Solar System comes with inevitable fading.  Binoculars are the best way to find and observe the comet visually.    Notable Images of Comet NEOWISE Submitted to APOD:  || July 14  || July 13  || July 12  || July 11  || July 10 & earlier ||",
    "hdurl": "https://apod.nasa.gov/apod/image/2007/NeowiseAlps_salzgeber_4000.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Comet NEOWISE over the Swiss Alps",
    "url": "https://apod.nasa.gov/apod/image/2007/NeowiseAlps_salzgeber_960.jpg"*/