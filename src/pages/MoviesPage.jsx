import { useState, useEffect } from "react"
import { getAllMovies} from "../api/dataApi"
import MovieList from "../components/MovieList"

const MoviesPage = ({addToFavorites, favorites, submittedSearchTerm}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const defaultSearchTermData = [
        "Marvel",
        "Lord of the Rings",
        "Alien",
        "Star Wars",
        "Halloween"
    ];

    const randomDefaultTerm = () => {
        const randomMovie = defaultSearchTermData[Math.floor(Math.random() * defaultSearchTermData.length)];
        return randomMovie;

    }

    
    const fetchMovies = async (term) => {
        try{
            setLoading(true)
            setError(null)

            const data = await getAllMovies(term);
            console.log(data)

            setMovies(data.Search ? data.Search : [])

        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }


    useEffect(() => {
        const term = submittedSearchTerm ? submittedSearchTerm : randomDefaultTerm()


    fetchMovies(term);
    }, [submittedSearchTerm]);
    


    if (loading) {
        return <div>Loading movies...</div>
    }

    if (error) {
        return (
            <div>
                <h2>Error loading movies</h2>
                <p>{error}</p>
                <button onClick={() => fetchMovies(submittedSearchTerm)}>Try again</button>
            </div>
        )
    }

    return (
        <div className="movies-page">
            {submittedSearchTerm ? <h3>Search results...</h3> : <h3>Recommended movies...</h3>}
            <MovieList className="movie-list"
            movies={movies}
            addToFavorites={addToFavorites}
            favorites={favorites}
            />
        {submittedSearchTerm ? <h3>Search results...</h3> : <h3>Recommended movies...</h3>}
        </div>
    )
}


export default MoviesPage