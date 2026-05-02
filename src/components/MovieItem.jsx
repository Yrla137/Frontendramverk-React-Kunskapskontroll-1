import { Link } from "react-router-dom"
import { useState } from "react"

const MovieItem = ({ movie, favorites, addToFavorites }) => {

  const isFavorite = favorites.some(
  (favorite) => favorite.imdbID === movie?.imdbID
  );

  return (
    <div>

      <Link to={`/movie/${movie.imdbID}`}>
        <div className="movie-card">

          <div className="movie-header">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
          </div>

          <div className="movie-image">
              <img src={movie.Poster} alt={movie.Title} />
          </div>

        </div>
      </Link>

      <button onClick={() => {
        addToFavorites(movie)}}>
        {isFavorite ? "Remove from favorites❤️" : "Add to favorites❤️"}</button>

    
    </div>
  )
}

export default MovieItem
