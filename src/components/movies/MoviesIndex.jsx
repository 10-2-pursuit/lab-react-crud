import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(true);

  const [movies, setMovies] = useState([]); 


  useEffect(() => {
    getAllMovies()
    .then ((moviesJson) => {
    setMovies(moviesJson)
    setLoadingError(false)
  })
    .catch((err)=> {
      setLoadingError(true)
      console.log(err)
    })
}, []);

return (
  <div>
      { loadingError ? (
      <ErrorMessage />
    ) : (
      <section className="movies-index-wrapper">
        <h2> All Movies </h2>
        <button>
          <Link to="/movies/new"> Add a Movie </Link>
          
      </button>
      <br />
      <label htmlFor="searchTitle" > Search Movies: 
      <input 
      type="text"
      id="searchTitle"
      />

      </label>
      <section className="movies-index">
        {movies.map((movie) => {
          return <MovieListing movie={movie} key={movie.id} />
        })}
    
      </section>
      </section>
    )}
  </div>
  );
      } 
