import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing"
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {

  const [loading, setLoadingError] = useState(false)
  const [shows, setShows] = useState ([]);

  useEffect(() => {
    getAllShows()
    .then((showsJson) => {
      setShows(showsJson)
      setLoadingError(false)
    })
    .catch((err) => {
      setLoadingError(true);
      console.error(err)
    })
  },[])

  return (
    <div>
      {false ? (
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
              // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
          { shows.map((show) => {
              return <ShowListing show = {show} key = {show.id}/>
            })}
            {/* <!-- ShowListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}
