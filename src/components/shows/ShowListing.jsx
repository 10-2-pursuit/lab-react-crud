import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ShowListing.css";

export default function ShowListing({ shows }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    setFilteredShows(shows);
  }, [shows]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = shows.filter((show) =>
      Object.values(show).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredShows(filtered);
  }, [shows, searchTerm]);

  return (
    <div>
      <h2>Shows List</h2>
      <div className="shows-input">
        <input
          type="text"
          placeholder="Search shows"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <section className="show-list">
      {filteredShows.map((show) => (
        <article className="show" key={show.id}>
          <h3 className="title">
            <Link to={`/shows/${show.id}`}>{show.title}</Link>
          </h3>
          <p className="description">{show.description}</p>
          <aside className="details">
            <p>
              <span>Listed Categories:</span>
              {show.listedIn}
            </p>
            <p>
              <span>Duration:</span> {show.duration}
            </p>
          </aside>
        </article>
      ))}
      </section>
    </div>
  );
}
