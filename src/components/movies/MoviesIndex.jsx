import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieListing from "./MovieListing";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";
import "./MoviesIndex.css"

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
    .then((moviesJson) => {
      setMovies(moviesJson)
      setLoadingError(false)
      }
    )
    .catch((err) => {
      setLoadingError(true)
      console.error(err)
    })
  }, [])
     
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ):(
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="./new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input 
            type="text"
            id="searchTitle"
            />
          </label>
          <section className="movies-index">
            {movies.map((movie) => {
              return <MovieListing movie = {movie} key = {movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}


