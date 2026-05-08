import { getMovieById } from "../api/dataApi"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FavoriteBtn from "../components/FavoriteBtn"
import '../MovieDetailsPage.css'

const MovieDetailsPage = ({favorites, addToFavorites}) => {
  const {id} = useParams()

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div className='loading-movie-details'>Loading movie details...</div>
  }

  if (error) {
    return (
      <div className='error-movie-details'>
        <h2 className='error-movie-details-title'>Error loading movie information</h2>
        <p>{error}</p>
        <button className='error-movie-details-retry-btn'
        onClick={fetchMovie}>Try Again</button>
        <br />
        <Link className='error-movie-details-link' to="/movies">← Back to movies</Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className='movie-not-found'>
        <h2 className='movie-not-found-title'>Movie details not found</h2>
        <Link className='movie-not-found-link' to="/movies">← Back to movies</Link>
      </div>
    );
  }

  return (
    <div className='movie-details-page'>

        <div className='movie-details-container'>
          <h2 className='movie-details-title'>{movie.Title}</h2>
          <img className='movie-details-poster' 
          src={movie.Poster} alt={`${movie.Title} poster`} />
          <div className='movie-details-info'>
            <p className='movie-detail-row'>Plot: {movie.Plot}</p>
            <p className='movie-detail-row'>Staring: {movie.Actors}</p>
            <p className='movie-detail-row'>Genre: {movie.Genre}</p>
            <p className='movie-detail-row'>Runtime: {movie.Runtime}</p>
            <p className='movie-detail-row'>Release: {movie.Released}</p>
            <p className='movie-detail-row'>Rating: {movie.Rated}</p>
            <p className='movie-detail-row'>Awards: {movie.Awards}</p>
            <p className='movie-detail-row'>Country: {movie.Country}</p>
            <p className='movie-detail-row'>Language: {movie.Language}</p>
          </div>
        </div>

        <div className='movie-details-favorite-btn'>
            <FavoriteBtn
            movie={movie}
            favorites={favorites}
            addToFavorites={addToFavorites}
          />

        </div>

    </div>
  )
} 

export default MovieDetailsPage










