import MovieItem from "../components/MovieItem"


const MovieList = ({movies, addToFavorites}) => {
    if(!movies.length) {
        return <div><p>No movies found</p></div>;
    }

  return (
        <section>
            {movies.map(movie =>
                <div key={movie.imdbID}>

                    <MovieItem
                    movie={movie}
                    addToFavorites={addToFavorites}/>

                </div>
            )}
        </section>
  )
}

export default MovieList