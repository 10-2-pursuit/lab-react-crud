import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import { getAllMovies } from "../../api/fetch";
import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((moviesJson) => {
        setMovies(moviesJson);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoadingError(true);
        console.log(error);
      });
  }, []);

 return(
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
  
          <section className="movies-index">
          <MovieListing movies={filteredMovies.length > 0 ? filteredMovies : movies} />
          </section>
        </section>
      )}
    </div>
  );
}
