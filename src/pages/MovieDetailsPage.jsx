import { getMovieById } from "../api/dataApi"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const MovieDetailsPage = ({favorites, addToFavorites}) => {
  const {id} = useParams()

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const isFavorite = favorites.some(
    (favorite) => favorite.imdbID === movie?.imdbID
  );

    const fetchMovie = async () => {
      
      try{
        setLoading(true);
        setError(null);

        const data = await getMovieById(id);
        setMovie(data);

      } catch(error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    fetchMovie();
  }, [id])


  if (loading) {
    return <div>Loading movie details...</div>
  }

  if (error) {
    return (
      <div>
        <h2>Error loading movie information</h2>
        <p>{error}</p>
        <button onClick={fetchMovie}>Try Again</button>
        <br />
        <Link to="/movies">← Back to movies</Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div>
        <h2>Movie details not found</h2>
        <Link to="/movies">← Back to movies</Link>
      </div>
    );
  }

  return (
    <div>

         <div className="movie-details-container">
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt="N/A" />
            <p>Plot: {movie.Plot}</p>
            <p>Staring: {movie.Actors}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Release: {movie.Released}</p>
            <p>Rating: {movie.Rated}</p>
            <p>Awards: {movie.Awards}</p>
            <p>Country: {movie.Country}</p>
            <p>Language: {movie.Language}</p>
          </div>

          <button className={`btn ${isFavorite ? "btn--remove" : "btn--add"}`}
          onClick={() => {
            addToFavorites(movie)}}>
            {isFavorite ? "Remove from favorites❤️" : "Add to favorites❤️"}</button>

    </div>
  )
} 

export default MovieDetailsPage










