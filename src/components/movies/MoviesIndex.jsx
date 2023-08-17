import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";

// import "./MoviesIndex.css";

export default function MoviesIndex() {
  return (
    <div>
      {false ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <!-- MovieListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}
