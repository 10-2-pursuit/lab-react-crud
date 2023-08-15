export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(true);

  const [movies, setMovies] = useState([]);


  
  useEffect(() => {
    fetch("URL/api/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json));
  }, []);


  return <p>Movie List</p>;
}
