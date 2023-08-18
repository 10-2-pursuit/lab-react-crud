import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";

function App() {
  const params = useParams();
  
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          {/* shows */}
          <Route path="/" element={<Home />} />
          <Route path="/:type" element={<ShowsIndex />} />
          <Route path="/:type/new" element={<ShowsNewForm />} />
          <Route path="/:type/:id" element={<Show />} />
          <Route path="/:type/:id/edit" element={<ShowsEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
