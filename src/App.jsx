import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import Nav from './components/Nav'
import MovieDetailsPage from './pages/MovieDetailsPage'
import FavoritesPage from './pages/FavoritesPage'

const App = () => {

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie])
  }


  

  return (
    <div className='App'>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/movies' element={< MoviesPage addToFavorites={addToFavorites}/>}/>
          <Route path='/movie/:id' element={< MovieDetailsPage/>}/>
          <Route path='/favorites' element={< FavoritesPage/>}/>
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

