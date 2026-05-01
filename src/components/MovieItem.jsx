import { Link } from "react-router-dom"

const MovieItem = ({ movie, addToFavorites }) => {
  return (
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

    <button onClick={() => addToFavorites(movie)}>Add to favorites</button>
      
    </Link>
  )
}

export default MovieItem