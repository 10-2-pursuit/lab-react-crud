import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing"
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([]);
  const [title, setTitle] = useState("");
  
  const param = useParams();
  const {type, id} = param;
  const [filmFilmType, setType] = useState(type);

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
        setShows(showsJson.filter((show) => show.title.toLowerCase().includes(title.toLowerCase())));
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
  },[title,type]);

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
          <h2>All {type.replace(type[0], type[0].toUpperCase())}</h2>
          <button>
            <Link to={`/${type}/new`}>Add a new show</Link>
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
              return <ShowListing show = {show} type={type} key = {show.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}
