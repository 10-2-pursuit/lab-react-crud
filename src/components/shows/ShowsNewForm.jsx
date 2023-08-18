import { useState } from "react";
import { createShow } from "../../api/fetch";
import "./ShowsForm.css";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowsForm() {
  const [show, setShow] = useState({
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
  const nav = useNavigate();
  const param = useParams();
  const {type} = param;

  function handleSubmit(event) {
    event.preventDefault();
    /*
    const tempShow = {
      type: event.target.type.value,
      title: event.target.title.value,
      country: event.target.country.value,
      dateAdded: event.target.dateAdded.value,
      description: event.target.description.value,
      duration: event.target.duration.value,
      listedIn: event.target.listedIn.value,
      rating: event.target.rating.value,
      releaseYear: event.target.releaseYear.value,
    };*/
    //console.log(show);
    createShow(show,type).then(() => {
      console.log("create success");
      nav(`/${type}`);
    }).catch((err)=>console.error(err));
  }

  function handleTextChange(event) {
    setShow({
      ...show,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={show.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={show.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={show.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={show.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={show.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={show.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={show.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={show.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={show.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}
