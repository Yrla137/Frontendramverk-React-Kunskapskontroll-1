import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFavorites } from "./api/dataApi";
import { addFavoriteApi, deleteFavoriteApi, updateFavoriteApi } from "./api/dataApi";
import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import Nav from './components/Nav'
import MovieDetailsPage from './pages/MovieDetailsPage'
import FavoritesPage from './pages/FavoritesPage'

const App = () => {

const [favorites, setFavorites] = useState([]);

useEffect(() => {
  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  loadFavorites();
}, []);


const addToFavorites = async (movie) => {
  const existing = favorites.find(favorite => favorite.imdbID === movie.imdbID);

  if (existing) {
  await deleteFavoriteApi(existing.id);
  setFavorites(prev =>
    prev.filter(favorite => favorite.id !== existing.id)
  );
  }
  else {
    const newFavorite = await addFavoriteApi(movie);
    setFavorites(prev => [...prev, newFavorite]);
  }}


  const deleteFavorite = async (id) => {
    await deleteFavoriteApi(id);

    setFavorites(prev =>
      prev.filter(favorite => favorite.id !== id)
    );
  };


  const updateFavorite = async (id, updatedData) => {
  const updated = await updateFavoriteApi(id, updatedData);

  if(!updated || !updated.id) return;

  setFavorites(prev =>
    prev.map(favorite =>
      favorite.id === id
      ? {...favorite, ...updated}
      : favorite)
  );
};
  

  return (
    <div className='App'>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/movies' element={< MoviesPage
            addToFavorites={addToFavorites}
            favorites={favorites}/>}/>
          <Route path='/movie/:id' element={< MovieDetailsPage
            addToFavorites={addToFavorites}
            favorites={favorites}/>}/>
          <Route path='/favorites'
          element={< FavoritesPage
          favorites={favorites}
          deleteFavorite={deleteFavorite}
          updateFavorite={updateFavorite}/>}/>
        </Routes>
        </BrowserRouter>


    </div>
  )
}

export default App

