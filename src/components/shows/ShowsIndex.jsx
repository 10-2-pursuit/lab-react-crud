import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing";
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    getAllShows()
      .then((showsJson) => {
        setShows(showsJson);
        setLoadingError(false);
      })
      .catch((err) => {
        setLoadingError(true);
        console.error(err);
      });
  }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <section className="shows-index">
            <ShowListing shows={filteredShows.length > 0 ? filteredShows : shows} />
          </section>
        </section>
      )}
    </div>
  );
}
