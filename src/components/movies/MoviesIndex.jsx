import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import { getAllMovies } from "../../api/fetch";
import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // we need to get data 
    getAllMovies()
      .then((moviesJson) => {
        setMovies(moviesJson)
        setLoadingError(false)
      })
      .catch((err)=> {
        setLoadingError(true);
        console.error(err)
      })
    // and save it to our shows  state

  },[])

  return (
    <div>
      { loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All movies</h2>
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
          <section className="movie-index">
            { movies.map((movie) => {
              return <MovieListing movie = {movie} key = {movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
