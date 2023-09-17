import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./MovieListing.css";

function MovieListing({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = movies.filter(movie =>
      Object.values(movie).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredMovies(filtered);
  }, [movies, searchTerm]);

  return (
    <div>
      <h2>Movies List</h2>
      <div>
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <section className="movies-list">
        {filteredMovies.map(movie => (
          <article className="movie" key={movie.id}>
            <h3 className="title">
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p className="description">{movie.description}</p>
            <aside className="details">
              <p>
                <span>Listed Categories:</span>
                {movie.listedIn}
              </p>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
            </aside>
          </article>
        ))}
      </section>
    </div>
  );
}

export default MovieListing;
