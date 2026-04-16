import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__link">
        Home
      </NavLink>

      <NavLink to="/search" className="navbar__link">
        Search
      </NavLink>

      <NavLink to="/favorites" className="navbar__link">
        Favorites
      </NavLink>
    </nav>
  );
}