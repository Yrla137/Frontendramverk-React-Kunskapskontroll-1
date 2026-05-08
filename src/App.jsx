import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFavorites } from "./api/dataApi";
import { addFavoriteApi, deleteFavoriteApi, updateFavoriteApi } from "./api/dataApi";

// Styling //
import './App.css'

import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import Nav from './components/Nav'
import MovieDetailsPage from './pages/MovieDetailsPage'
import FavoritesPage from './pages/FavoritesPage'
import SearchBar from './components/SearchBar';

const App = () => {

const [favorites, setFavorites] = useState([]);

const [searchTerm, setSearchTerm] = useState("")
// Vad som skrivs i sökfältet sparas i searchTerm som är en state-variabel. setSearchTerm är funktionen som uppdaterar den.
// Denna state är kopplad till SearchBar och används endast för UI (vad som visas i inputfältet).
// Denna triggar inte API-anroppet direkt eftersom den ändras varje gång användaren skriver något.

const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
// Detta är det state som tillskillnad från searchTerm inte ändras vid varje tangenttryckning.
// Den ändras endast när användaren aktivt gör en sökning (t.ex. trycker på Enter eller klickar på Search-knappen).
// Det är denna som används för att hämta datan via en sökning(triggar API-anropet i MoviesPage).


  const navigate = useNavigate();
  // Detta ger dig en funktion som kan byta sida

  const onSearch = (term) => {
    if (!term.trim()) return;

    setSubmittedSearchTerm(term);
    navigate('/movies');
  };
  // Detta är din “trigger”. När den körs säger React “byt sida” och Router går till /movies.


useEffect(() => {
  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  loadFavorites();
}, []);


const addToFavorites = async (movie) => {
  try {
    const existing = favorites.find(favorite => favorite.imdbID === movie.imdbID);

    if (existing) {
      await deleteFavoriteApi(existing.id);
      setFavorites(prev =>
        prev.filter(favorite => favorite.id !== existing.id)
      );
    } else {
      const newFavorite = await addFavoriteApi({
        ...movie,
        comment: ""
      });

      setFavorites(prev => [...prev, newFavorite]);
    }
  } catch (error) {
    console.error("Error updating favorites:", error);
  }
};


  const deleteFavorite = async (id) => {
    try {
      await deleteFavoriteApi(id);

      setFavorites(prev =>
        prev.filter(favorite => favorite.id !== id)
      );
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };


  const updateFavorite = async (id, updatedData) => {
  try {
    const updated = await updateFavoriteApi(id, updatedData);

    if (!updated || !updated.id) return;

    setFavorites(prev =>
      prev.map(favorite =>
        favorite.id === id
          ? { ...favorite, ...updated }
          : favorite
      )
    );
  } catch (error) {
    console.error("Error updating favorite:", error);
  }
};


const onResetMovies = () => {
  setSubmittedSearchTerm("")
  setSearchTerm("")
}
 

  return (
    <div className='app'>
        
        <Nav
        onResetMovies={onResetMovies}
        />
        <header className='app-header'>
           <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={onSearch}
          />
        </header>

        <main className='app-main'>
          <Routes>
          <Route path='/' element={< Home
          onResetMovies={onResetMovies}/>}/>
          <Route path='/movies' element={< MoviesPage
            addToFavorites={addToFavorites}
            favorites={favorites}
            submittedSearchTerm={submittedSearchTerm}
            onSearch={onSearch}
            />}/>
          <Route path='/movie/:id' element={< MovieDetailsPage
            addToFavorites={addToFavorites}
            favorites={favorites}/>}/>
          <Route path='/favorites'
          element={< FavoritesPage
          favorites={favorites}
          deleteFavorite={deleteFavorite}
          updateFavorite={updateFavorite}/>}/>
        </Routes>
        </main>

    </div>
  )
}

export default App
