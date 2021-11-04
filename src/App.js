import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhotoCard from './PhotoCard';
// import moment from 'moment';
import { randDate } from './DateGenerator'
import "./App.css";

function App() {
  
  let randomDate = randDate();

  const [data, setData] = useState({});

  const [randData, setRandData] = useState({})

    
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=o7dGJltoP3OqKjtIzhwX7BvD6dVL88BUpFMhUMmp")
      .then(res => {
        console.log(res.data);
      
        setData(res.data);
      
    })

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=o7dGJltoP3OqKjtIzhwX7BvD6dVL88BUpFMhUMmp&date=${randomDate}`)
      .then(results => {
        console.log(results.data);
      
        setRandData(results.data);
      
    })


  }, []);


  return (
    <div className="App">

      <PhotoCard
        title={data.title}
        date={data.date}
        url={data.url}
        explanation={data.explanation}
      />
      <PhotoCard
        title={randData.title}
        date={randData.date}
        url={randData.url}
        explanation={randData.explanation}
      />
    </div>
  );
}

export default App