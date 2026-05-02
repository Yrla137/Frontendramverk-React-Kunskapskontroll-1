import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import Nav from './components/Nav'
import MovieDetailsPage from './pages/MovieDetailsPage'
import FavoritesPage from './pages/FavoritesPage'

const App = () => {

const [favorites, setFavorites] = useState(() => {

  const savedData = localStorage.getItem("favorites");

  if (savedData) {
    return JSON.parse(savedData);
  }
  return [];
});



const addToFavorites = (movie) => {
  if(favorites.some(favorite =>
     favorite.imdbID === movie.imdbID))
      setFavorites(prev=>
      prev.filter(prev => prev.imdbID !== movie.imdbID))
    else{
       setFavorites(prev => [...prev, movie]);
    }
}


useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));

}, [favorites]); // 🔁 körs varje gång favorites ändras





  const deleteFavorite = (imdbID) => {
    setFavorites((prevFavorite) =>
    prevFavorite.filter(favorite => favorite.imdbID !== imdbID))
  }

  const updateFavorite = (imdbID, updatedData) => {
  setFavorites((prevFavorites) =>
    prevFavorites.map((favorite) => favorite.imdbID === imdbID
  ? { ...favorite, ...updatedData }
  : favorite))};

  

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


  // const addToFavorites = (movie) => {
// movie i (movie) är bara ett namn man själv väljer, värdet som skickas in kommer från där funktionen anropas.
// const addToFavorites = (movie) => {
// 👉 betyder:
// “när någon anropar denna funktion, ge mig ett värde → jag kallar det movie”

// 🧠 Så var kommer värdet ifrån?
// Inte från state.
// Inte automatiskt.
// 👉 Det kommer från din knapp i MovieItem

