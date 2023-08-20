import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import { createMovie, getAllMovies } from "../../api/fetch"; // Import the necessary function

//import "./MoviesForm.css";

export default function MovieNewForm() {
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

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setMovie((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const movieTitle = movie.title;

    getAllMovies()
      .then((movies) => {
        const movieExists = movies.some((existingMovie) =>
          existingMovie.title.toLowerCase() === movieTitle.toLowerCase()
        );

        if (movieExists) {
          alert(`Movie "${movieTitle}" already exists.`);
        } else {
          createMovie(movie)
            .then(() => {
              alert(`Movie "${movieTitle}" created - redirecting to index`);
              navigate('/movies');
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="movie-new-form">
    <h1>Add a Movie</h1>
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

      <input type="submit" value="Create Movie"/>
    </form>
    </div>
  );
}
