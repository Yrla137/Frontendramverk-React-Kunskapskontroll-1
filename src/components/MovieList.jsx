import MovieItem from "../components/MovieItem"


const MovieList = ({movies, favorites, addToFavorites, searchTerm}) => {

    if (!searchTerm || searchTerm.trim() === "") {
        return <div><p>Search for a movie...</p></div>;
    }

    if(!movies || movies.length === 0) {
        return <div><p>No movies found</p></div>;
    }

  return (
        <section>
            {movies.map(movie =>
                <div>

                    <MovieItem
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