import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";

import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";
import { destroyShow, getOneShow } from "../../api/fetch";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  const navi = useNavigate();

  useEffect(() => {
    getOneShow(id)
      .then((showData) =>{
        setShow(showData);
        // because state in an obj we need to check Object.keys()
        if (Object.keys(showData).length === 0) {
          setLoadingError(true)
        } else {
          setLoadingError(false)
        }
      })
      .catch((err) => {
        console.error(err)
        setLoadingError(true)
      })
  },[id]);

  useEffect(null,[navi]);

  function handleDelete(id) {
    destroyShow(id).then((msg) => {
                                    console.log("delete successfully");
                                  }).catch((err) => {
                                                      console.error(err);
                                                      setLoadingError(true);
                                                    });
  }

  return (
    <section className="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>{show.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(show.id)}>
                Remove show
              </button>
              <Link to={`/shows/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Show;
