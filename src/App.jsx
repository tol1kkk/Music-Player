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

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (song) => {
  setFavorites((prevFavorites) => {
    if (!prevFavorites.some((item) => item.id === song.id)) {
      return [...prevFavorites, song];
    }    return prevFavorites;
  });
}
  return (
    <PlayerProvider>
      <BrowserRouter>
        <div className="container">
          <TrackCard />
          <main className="main">
            <section className="page_content">
              <Routes>
                <Route path="/" element={<Home tracks={tracks} addToFavorites={addToFavorites} />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorites favorites={favorites} />} />
              </Routes>
            </section>

            <Navbar />
          </main>
        </div>
      </BrowserRouter>
    </PlayerProvider>
  );
}