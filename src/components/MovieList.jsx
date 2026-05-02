import MovieItem from "../components/MovieItem"


const MovieList = ({movies, favorites, addToFavorites}) => {
    if(!movies.length) {
        return <div><p>No movies found</p></div>;
    }

  return (
        <section>
            {movies.map(movie =>
                <div key={movie.imdbID}>

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