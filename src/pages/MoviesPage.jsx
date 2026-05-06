import { useState, useEffect } from "react"
import { getAllMovies} from "../api/dataApi"
import MovieList from "../components/MovieList"

const MoviesPage = ({addToFavorites, favorites, submittedSearchTerm}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
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
    if (!submittedSearchTerm) return;
    fetchMovies(submittedSearchTerm);
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
            <MovieList className="movie-list"
            movies={movies}
            addToFavorites={addToFavorites}
            favorites={favorites}
            searchTerm={submittedSearchTerm}
            />
        </div>
    )
}


export default MoviesPage