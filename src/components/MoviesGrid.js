import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select>
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantsy</option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default MoviesGrid;
