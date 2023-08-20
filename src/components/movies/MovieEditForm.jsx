import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import { getOneMovie, updateMovie } from "../../api/fetch";
//import "./MoviesForm.css";

export default function MovieEditForm() {
  const [loadingError, setLoadingError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  useEffect(() => {
    getOneMovie(id).then((movie) => {
      setMovie(movie);
      if (Object.keys(movie).length === 0) {
        setLoadingError(true);
      } else {
        setLoadingError(false);
      }
    })
    .catch((error) => {
      setLoadingError(true);
      console.log(error);
    });
  }, [id]);

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setMovie((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    updateMovie(id, movie)
      .then(() => {
        alert('Movie updated - redirecting to index');
        navigate('/movies');
      })
      .catch((err) => {
        console.error(err);
      });
      navigate.push('/movies');
  };
  

  return (
    <div className="movie-edit-form">
    <h1>Edit Movie</h1>
    {loadingError ? (
      <ErrorMessage />
    ) : (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={movie.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={movie.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={movie.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={movie.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={movie.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={movie.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={movie.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={movie.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={movie.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" value="Update Movie"/>
    </form>
  )};
  </div>
  );
}
