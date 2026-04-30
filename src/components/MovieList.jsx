
const MovieList = ({movies}) => {
    if(!movies.length) {
        return <div><p>No movies found</p></div>;
    }

  return (
    <div>
        <section>
            {movies.map(movie =>
                <div key={movie.imdbID} className="movie-card">

                    <div className="movie-header">
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year} <br /></p>
                    </div>

                    <div className="movie-image">
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>

                    {/* <div className="movie-info">
                        <p>{movie.Genre}</p>
                        <p>{movie.Runtime}</p>
                        <p>{movie.Rated}</p>
                        <p>{movie.Released}</p>
                    </div> */}

                </div>
            )}
        </section>
    </div>
  )
}

export default MovieList