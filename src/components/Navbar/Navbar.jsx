import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__link">
      <img src="./public/home-button.png" alt="" className="link-img"/>
        Home
      </NavLink>

      <NavLink to="/search" className="navbar__link">
      <img src="./public/search.png" alt="" className="link-img"/>
        Search
      </NavLink>

      <NavLink to="/favorites" className="navbar__link">
      <img src="./public/heart-love.png" alt="" className="link-img"/>
        Favorites
      </NavLink>
    </nav>
  );
}