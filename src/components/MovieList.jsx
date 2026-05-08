import MovieItem from "../components/MovieItem"

// Styling //
import '../MovieList.css'


const MovieList = ({movies, favorites, addToFavorites}) => {

    if(!movies || movies.length === 0) {
        return <div><p>No movies found</p></div>;
    }

  return (
        <section className="movie-list-section">
            {movies.map(movie =>
                <div className="movie-list-item" key={movie.imdbID}>

                    <MovieItem
                    movie={movie}
                    addToFavorites={addToFavorites}
                    favorites={favorites}/>

                </div>
            )}
        </section>
  )
}

export default MovieList