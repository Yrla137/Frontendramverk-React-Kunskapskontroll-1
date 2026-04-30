import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage'
import Nav from './components/Nav'

const App = () => {

  return (
    <div className='App'>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/movies' element={< MoviesPage />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App