import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Movie from "./components/movies/Movie";
import MovieEditForm from "./components/movies/MovieEditForm";
import MoviesIndex from "./components/movies/MoviesIndex";
import MovieNewForm from "./components/movies/MovieNewForm";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Movies Routes */}
          <Route path="/Movies" element={<MoviesIndex />} />
          <Route path="/Movies/new" element={<MovieNewForm />} />
          <Route path="/Movies/:id" element={<Movie />} />
          <Route path="/Movies/:id/edit" element={<MovieEditForm />} />
          
          {/* Shows Routes */}
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
