import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ErrorMessage from '../errors/ErrorMessage';
import './Movie.css';
import { getOneMovie, destroyMovie } from '../../api/fetch';

function Movie() {  
    const [Movie, setMovie] = useState({});
    const [loadingError, setLoadingError] = useState(false);

const { id } = useParams();

function handleDelete(id) {
    destroyMovie(id)
        .then(() => {
          alert("movie deleted")
    setMovie({});
    setLoadingError(false); 
    navigate("/movie");
})
    .catch((err) => {
        setLoadingError(true);
    }
    )
}
useEffect(() => {
    getOneMovie(id)
        .then((movie) => {
            setMovie(movie);
        }
        )
        .catch((err) => {
            setLoadingError(true);
        }
        )
}, [id])

//   }  
function handleUpdateMovie() {
    setMovie({});
    setLoadingError(false);
}
    useEffect(() => {
        getOneMovie(id)
            .then((movie) => {
                setMovie(movie);
            }
            )
            .catch((err) => {
                setLoadingError(true);
            }
            );
    }, []);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    // eslint-disable-next-line


  return (
    <section className="Movies-Movie-wrapper">
    <h2>{Movie.title}</h2>
    <section className="Movies-Movie">
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <>
          <aside>
            <p>
              <span>Duration:</span> {Movie.duration}
            </p>
            <p>
              <span>Listed Categories:</span> {Movie.listedIn}
            </p>
            <p>
              <span>Country:</span> {Movie.country}
            </p>
            <p>
              <span>Rating:</span> {Movie.rating}
            </p>
            <p>
              <span>Date Added:</span> {Movie.dateAdded}
            </p>
          </aside>
          <article>
            <p>{Movie.description}</p>
          </article>
          <aside>
            <button className="delete" onClick={() => handleDelete(Movie.id)}>
              Remove Movie
            </button>
            <Link to={`/Movies/${id}/edit`}>
            <button className="edit-movie" onClick={() => handleUpdateMovie(Movie.id)}>
              Edit Movie
            </button>
            </Link>
          </aside>
        </>
      )}
    </section>
  </section>
);
}

export default Movie;