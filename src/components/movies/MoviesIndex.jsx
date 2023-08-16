import React, { useEffect, useState } from "react";
import ["./App.css"]



//Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";


export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(true);

  const [movies, setMovies] = useState([]);


  
  useEffect(() => {
    fetch("URL/api/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json));
  }, []);


  return <p>Movie List</p>;
}
