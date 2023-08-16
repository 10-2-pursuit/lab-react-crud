import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getOneMovie, destroyMovie } from "../../api/fetch";

import React from "react";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneMovie(id)
      .then((movieData) => {
        setMovie(movieData);
        if (Object.keys(showData).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoadingError(true);
      });
  });
  return (
    <section className="shows-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="shows-movie">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
};

export default Movie;
