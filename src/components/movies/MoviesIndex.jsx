import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import { getAllMovies } from "../../api/fetch";
import "./MoviesIndex.css";

export default function ShowsIndex() {

  const [loading, setLoadingError] = useState(false)
  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    getAllMovies()
    .then((showsJson) => {
      setMovies(showsJson)
      setLoadingError(false)
    })
  
    .catch((err) => {
      setLoadingError(true);
      console.error(err)
    })
  },[])


  return (
    <div>
      {false ? (
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
              id="searchTitle"
            />
          </label>
          <section className="movies-index">
          { movies.map((movie) => {
              return <ShowListing movie = {movie} key = {movie.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
