import { Link } from "react-router-dom"
import FavoriteBtn from "./FavoriteBtn";

const MovieItem = ({ movie, favorites, addToFavorites }) => {

  return (
    <div className="movie-card-container">

      <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">

          <div className="movie-card-header">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
          </div>

          <div className="movie-card-image">
            {!movie.Poster || movie.Poster === "N/A" ? (
              <div className="no-poster-image">
                <img src="src\assets\No_image_placeholder.jpg" alt="No image available" />
              </div>
            ) : (
              <img src={movie.Poster} alt={movie.Title} />
            )}
          </div>

      </Link>

      <FavoriteBtn
        movie={movie}
        favorites={favorites}
        addToFavorites={addToFavorites}
      />

    
    </div>
  )
}

export default MovieItem
