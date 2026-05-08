import {NavLink} from "react-router-dom";

// Styling //
import "../CSS/Nav.css"

const Nav = ({onResetMovies}) => {
  return (
    <nav className='main-nav'>
        <ul className="nav-list">
          <li className='nav-item'><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li className='nav-item'><NavLink to='/movies' className="nav-link" onClick={onResetMovies}>Movies</NavLink></li>
          <li className='nav-item'><NavLink to='/favorites' className="nav-link">Favorites</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav