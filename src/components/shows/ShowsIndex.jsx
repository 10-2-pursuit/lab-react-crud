import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing"
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // we need to get data 
    getAllShows()
      .then((showsJson) => {
        setShows(showsJson)
        setLoadingError(false)
      })
      .catch((err)=> {
        setLoadingError(true);
        console.error(err)
      })
    // and save it to our shows  state

  },[])

  useEffect(()=> {
    if(title){
      getAllShows().then((showsJson) => {
        setShows(showsJson.filter((show) => show.title.includes(title)));
        setLoadingError(false);
      }).catch((err)=>{
        setLoadingError(true);
        console.error(err);
      });
    }
    else{
      getAllShows()
      .then((showsJson) => {
        setShows(showsJson)
        setLoadingError(false)
      })
      .catch((err)=> {
        setLoadingError(true);
        console.error(err)
      })
    }
  },[title]);

  function handleTextChange(){
    const inputField = document.getElementById('searchTitle').value;
    setTitle(inputField);
  }

  return (
    <div>
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
