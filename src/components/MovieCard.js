import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200"
        }
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Type:</strong> {movie.Type}
      </p>
    </div>
  );
};

export default MovieCard;
