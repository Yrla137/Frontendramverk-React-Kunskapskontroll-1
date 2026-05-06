import MovieItem from "../components/MovieItem"


const MovieList = ({movies, favorites, addToFavorites}) => {

    // if (!searchTerm || searchTerm.trim() === "") {
    //     return <div><p>Search for a movie...</p></div>;
    // }

    if(!movies || movies.length === 0) {
        return <div><p>No movies found</p></div>;
    }

  return (
        <section className="movie-list-section">
            {movies.map(movie =>
                <div className="movie-item-container" key={movie.imdbID}>

                    <MovieItem
                    className="movie-item"
                    key={movie.imdbID}
                    movie={movie}
                    addToFavorites={addToFavorites}
                    favorites={favorites}/>

                </div>
            )}
        </section>
  )
}

export default MovieList