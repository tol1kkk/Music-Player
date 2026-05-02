import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        <img src="./public/home.png" alt="" className="link-img" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        <img src="./public/search.png" alt="" className="link-img" />
        <span>Search</span>
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        <img src="./public/heart.png" alt="" className="link-img" />
        <span>Favorites</span>
      </NavLink>
    </nav>
  );
}