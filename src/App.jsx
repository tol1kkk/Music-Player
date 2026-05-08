import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import Navbar from "./components/Navbar/Navbar";
import TrackCard from "./components/trackCard/TrackCard";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import "./App.css";
import tracks from "./data/track";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
//   const [favorites, setFavorites] = useState([]);

//   const addToFavorites = (song) => {
//   setFavorites((prevFavorites) => {
//     if (!prevFavorites.some((item) => item.id === song.id)) {
//       return [...prevFavorites, song];
//     }    return prevFavorites;
//   });
// }
const [favorites, setFavorites] = useState(() => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
});

useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

// const addToFavorites = (song) => {
//   setFavorites((prevFavorites) => {
//     if (!prevFavorites.some((item) => item.id === song.id)) {
//       return [...prevFavorites, song];
//     }
//     return prevFavorites;
//   });
// };

const toggleFavorite = (song) => {
  setFavorites((prevFavorites) => {
    const isFavorite = prevFavorites.some((item) => item.id === song.id);
    if (isFavorite) {
      return prevFavorites.filter((item) => item.id !== song.id);
    } else {
      return [...prevFavorites, song];
    }
  })
}
  const isSongFavorite = (id) => {
    return favorites.some((song) => song.id === id);
  }
  return (
    <PlayerProvider>
      <BrowserRouter>
        <div className="container">
          <TrackCard />
          <main className="main">
            <section className="page_content">
              <Routes>
                <Route path="/" element={<Home tracks={tracks} toggleFavorite={toggleFavorite} favorites={favorites} />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
              </Routes>
            </section>

            <Navbar />
          </main>
        </div>
      </BrowserRouter>
    </PlayerProvider>
  );
}