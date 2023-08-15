import {Link} from 'react-router-dom'
import "./MovieListing.css";
// this means Movielisting is waiting for a movie prop
export default function MovieListing({ movie }) {
  return (
    <article className="movie">
      <h3 className="title">
        {/* using the movie prop here */}
        {/* the <Link /> is for a USER to click on */}
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </h3>
      <p className="description">{movie.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {movie.listedIn}
        </p>
        <p>
          <span>Duration:</span> {movie.duration}
        </p>
      </aside>
    </article>
  );
}
