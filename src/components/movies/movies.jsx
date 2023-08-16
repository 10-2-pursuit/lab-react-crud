
return (
    <section className="movies-movie-wrapper">
        <h2>{movie.title}</h2>
    </section>
    {loadingError ? (
        <ErrorMessage />
    ) : (
        <>
        <aside>
        <p>
        <span>Duration:</span>{movie.duration}
        </p>
        <p>
        <span><Categories></Categories>:</span>{movie.listedIn}
        </p>
        <p>
        <span>Country:</span>{movie.country}
        </p>
        <p>
        <span>Rating:</span>{movie.rating}
        </p>
        <p>
        <span>Date Added:</span>{movie.dateAdded}
        </p>
        </aside>
        <article>
        <p>{movie.description}</p>
        </article>
        <aside>
        <button className="movie-delete" onClick={() => handleDelete(show.id)}>
        Remove Movie
        <Link to={`/movies/${id}/edit`}>
            </button>Edit</button>
        </Link>
        </aside>
        </>
    )}
    </section>
    </section>
);
    
    export default Movies;