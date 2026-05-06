import { Link } from "react-router-dom"
import { useState } from "react";

const MovieItem = ({ movie, favorites, addToFavorites }) => {

  const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

  const isFavorite = favorites.some(
  (favorite) => favorite.imdbID === movie?.imdbID
  );

  return (
    <div>

      <Link to={`/movie/${movie.imdbID}`} className="movie-card">

          <div className="movie-header">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
          </div>

          <div className="movie-image">
            {!movie.Poster || movie.Poster === "N/A" ? (
              <div className="no-poster-image">
                <img src="src\assets\No_image_placeholder.jpg" alt="No image available" />
              </div>
            ) : (
              <img src={movie.Poster} alt={movie.Title} />
            )}
          </div>

      </Link>

      <button
      disabled={isFavoriteLoading}
      onClick={ async () => {
        setIsFavoriteLoading(true)
        try {
        await addToFavorites(movie)}
        finally{
          setIsFavoriteLoading(false)
        }}}>
        {isFavoriteLoading ? "Updating..." : isFavorite ? "Remove from favorites❤️" : "Add to favorites❤️"}
        </button>

    
    </div>
  )
}

export default MovieItem
