import '../Home.css'

import { useNavigate } from "react-router-dom"

const Home = ({onResetMovies}) => {

  const navigate = useNavigate()

  return (
    <div className='home-page'>

      <div className='home-hero'>
        <h1 className='home-hero-title'>
          Find your next favorite movie
        </h1>

        <p className='home-hero-text'>
          Search, save and organize your favorite movies
        </p>

        <button
          className='home-hero-btn'
          onClick={() => {
            onResetMovies();
            navigate('/movies');
          }}
        >
          Browse movies
        </button>
      {/* Denna knapp använder navigate så som vi gör i Nav.jsx och använder funktionen onResetMovies som vi skickar ner från App.jsx.
      Återställer söktermen till en tom sträng när användaren klickar på knappen, vilket gör att de alltid startar med en ny sökning när de går till MoviesPage. */}
      </div>

    </div>
  )
}

export default Home 