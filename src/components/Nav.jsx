import {NavLink} from "react-router-dom";

const Nav = ({onResetMovies}) => {
  return (
    <div className="main-nav">
        <ul className="nav-ul">
          <li><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li><NavLink to='/movies' className="nav-link" onClick={onResetMovies}>Movies</NavLink></li>
          <li><NavLink to='/favorites' className="nav-link">Favorites</NavLink></li>
        </ul>
    </div>
  )
}
export default Nav