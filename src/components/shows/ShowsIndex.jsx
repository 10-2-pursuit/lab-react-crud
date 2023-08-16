import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShows } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

export default function ShowsIndex() {

  const [shows, setShows] = useState([]);
  const [loadingError , setLoadingError] = useState(true);  
  

  useEffect(() => {
    getAllShows()
      .then((shows) => {
        setShows(shows);
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
            {/* <!-- ShowListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}
