import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import Navbar from "./components/Navbar/Navbar";
import TrackCard from "./components/trackCard/TrackCard";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import "./App.css";

export default function App() {
  return (
    <PlayerProvider>
      <BrowserRouter>
        <div className="container">
          <TrackCard />
          <main className="main">
            <section className="page_content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </section>

            <Navbar />
          </main>
        </div>
      </BrowserRouter>
    </PlayerProvider>
  );
}