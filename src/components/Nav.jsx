import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-nav">
        <ul className="nav-ul">
          <li><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li><NavLink to='/movies' className="nav-link">Movies</NavLink></li>
        </ul>
    </div>
  )
}
export default Nav