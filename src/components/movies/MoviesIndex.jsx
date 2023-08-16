import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from './MovieListing';
import { getAllMovies } from '../../api/fetch';
import "./MoviesIndex.css"

const MoviesIndex = () => {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
    .then((moviesJson) => {
      setMovies(moviesJson)
      setError(false);
    })
    .catch((err) => {
      setError(true);
      console.error(err)
    })
  }, [])


  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {movies.map((movie)=> {
              return <MovieListing movie={movie} key={movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}

export default MoviesIndex;
