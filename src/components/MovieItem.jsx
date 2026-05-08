import { Link } from "react-router-dom"
import noPoster from "../assets/No_image_placeholder.jpg"
import FavoriteBtn from "./FavoriteBtn";
import '../MovieItem.css'

const MovieItem = ({ movie, favorites, addToFavorites }) => {

  return (
    <div className='movie-item-container'>

      <Link to={`/movie/${movie.imdbID}`} className='movie-item-link'>

        <div className='movie-item-header'>
          <h3 className='movie-item-title'>{movie.Title}</h3>
          <p className='movie-item-year'>{movie.Year}</p>
        </div>

        <div className='movie-item-image'>

          {!movie.Poster || movie.Poster === "N/A" ? (

            <img
              src={noPoster}
              alt="No image available"
              className='movie-item-poster movie-item-poster--placeholder'
            />

          ) : (

            <img
              src={movie.Poster}
              alt={movie.Title}
              className='movie-item-poster'
            />

          )}

        </div>

      </Link>

      <div className='movie-item-actions'>
        <FavoriteBtn
          movie={movie}
          favorites={favorites}
          addToFavorites={addToFavorites}
        />
      </div>
  </div>
  )
}

export default MovieItem
