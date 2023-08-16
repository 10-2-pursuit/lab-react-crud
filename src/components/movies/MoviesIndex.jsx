import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "../shows/ShowListing"
import { getAllShows } from "../../api/fetch";

const MoviesIndex = () => {
  return (
    <div>
      <p>Movie List</p>;
    </div>
  );
}

export default MoviesIndex;
