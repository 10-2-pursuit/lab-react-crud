import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../all/ShowListing"
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([]);
  const [title, setTitle] = useState("");

  const [type, setType] = useState("");

  useEffect(() => {
    // we need to get data 
    getAllShows(type)
      .then((showsJson) => {
        setShows(showsJson);
        setLoadingError(false);
      })
      .catch((err)=> {
        setLoadingError(true);
        console.error(err);
      })
    // and save it to our shows  state

  },[])

  useEffect(()=> {
    if(title){
      getAllShows(type).then((showsJson) => {
        setShows(showsJson.filter((show) => show.title.toLowerCase().includes(title)));
        setLoadingError(false);
      }).catch((err)=>{
        setLoadingError(true);
        console.error(err);
      });
    }
    else{
      getAllShows(type)
      .then((showsJson) => {
        setShows(showsJson);
        setLoadingError(false);
      })
      .catch((err)=> {
        setLoadingError(true);
        console.error(err);
      })
    }
  },[title]);

  useEffect(null,[setType]);

  function handleTextChange(){
    const inputField = document.getElementById('searchTitle').value;
    setTitle(inputField);
  }

  function handleDropdownChange(){
    const filmType = document.getElementById('film_type').value;
    setType(filmType);
  }

  return (
    <div>
      <div className="drop_down_container">
        <select id="film_type">
          <option value="" onChange={handleDropdownChange}>All</option>
          <option value="movies" onChange={handleDropdownChange}>Movies</option>
          <option value="shows" onChange={handleDropdownChange}>Shows</option>
        </select>
      </div>
      { loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            { shows.map((show) => {
              return <ShowListing show = {show} key = {show.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
