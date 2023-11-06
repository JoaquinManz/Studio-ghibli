import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Card.css';

function Card () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios
        .get("https://ghibli-api-v1.azurewebsites.net/api/v1/movies")
        .then((result) => {
          setMovies(result.data.movies);
          console.log(result.data.movies)
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <div className='container'>
          {movies.map((data) => {
            return (
              <div>
                <div className= "card-container" key={data.title.en}>
                  <h1 
                  className="card-title">
                    {data.title.es}
                  </h1>
                  <p className="card-title-jp">
                    {data.title.jp}
                  </p>
                  <img 
                    className= "card-img" 
                    src={data.image} 
                    alt="Card image"
                  />
                  <p 
                    className="card-description">
                    {data.description.es}
                    </p>
                  <h3 
                  className= "card-director">
                    Director:<br />{data.director}
                    </h3>
                </div>
              </div>
            );
          })}
        </div>
      );
}

export default Card;