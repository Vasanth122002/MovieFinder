import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            apikey: "5063af71",
            s: searchQuery,
          },
        });
        setMovies(response.data.Search);
        setError(null);
      } catch (error) {
        setError("Error fetching movie data. Please try again.");
        setMovies([]);
      }
    }
  };

  return (
    <div className="App">
      <h1>Movie Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default App;
