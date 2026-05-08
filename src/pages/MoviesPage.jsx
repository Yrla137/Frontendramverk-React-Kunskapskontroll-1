import { useState, useEffect } from "react"
import { getAllMovies} from "../api/dataApi"
import MovieList from "../components/MovieList"
import '../MoviesPage.css'

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

            setMovies(data.Search ? data.Search : [])

        } catch (error) {
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
        return <div className='loading-movies-state'>Loading movies...</div>
    }

    if (error) {
        return (
            <div className='error-movies-state'>
                <h2 className='error-movies-title'>Error loading movies</h2>
                <p className='error-movies-message'>{error}</p>
                <button
                className='error-movies-retry-btn'
                onClick={() => {
                const retryTerm = submittedSearchTerm
                ? submittedSearchTerm
                : randomDefaultTerm()

                fetchMovies(retryTerm)
            }}>Try again</button>
            </div>
        )
    }

    return (
        <div className="movies-page">
            {submittedSearchTerm ? <h3>Search results...</h3> : <h3>Recommended movies...</h3>}
            <div className='movies-page-container'>
                <MovieList
                movies={movies}
                addToFavorites={addToFavorites}
                favorites={favorites}
                />
            </div>
        </div>
    )
}


export default MoviesPage