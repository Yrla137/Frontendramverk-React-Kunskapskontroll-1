import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-nav">
        <ul className="nav-ul">
          <li><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li><NavLink to='/movies' className="nav-link">Movies</NavLink></li>
          {/* Lägg till så att random filmer visas när man kommer till denna sida */}
          <li><NavLink to='/favorites' className="nav-link">Favorites</NavLink></li>
          {/* Lägg til så denna länk kommer till Favorit-sidan */}
        </ul>
    </div>
  )
}
export default Nav