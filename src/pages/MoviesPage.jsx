import { useState, useEffect } from "react"
import { getAllMovies} from "../api/dataApi"
import MovieList from "../components/MovieList"
import SearchBar from "../components/SearchBar";

const MoviesPage = ({addToFavorites, favorites}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchTerm, setSearchTerm] = useState("")

    
    const fetchMovies = async () => {
        try{
            setLoading(true)
            setError(null)

            const data = await getAllMovies(searchTerm)
            console.log(data)

            setMovies(data.Search ? data.Search : [])
            // Säkerställer att movies alltid blir en array.
            // Detta API kan ibland returnera data.Search som undefined när inga resultat finns,
            // därför används en tom array som fallback för att undvika att MovieList kraschar när den försöker använda .map() eller .length.

        } catch (error) {
            console.error(error)
            setError(error.message)
        } finally{
            setLoading(false)
        }
    }

    const onSearch = () => {
        fetchMovies()
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    if (loading) {
        return <div>Loading movies...</div>
    }

    if (error) {
        return (
            <div>
                <h2>Error loading movies</h2>
                <p>{error}</p>
                <button onClick={fetchMovies}>Try again</button>
            </div>
        )
    }
    

    return (
        <div>
            <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={onSearch}/>

            <MovieList
            movies={movies}
            addToFavorites={addToFavorites}
            favorites={favorites}
            />
        </div>
    )
}


export default MoviesPage