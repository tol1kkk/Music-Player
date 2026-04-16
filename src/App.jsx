import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <aside className="sidebar">
          <h2>Now Playing</h2>
        </aside>

        <main className="main">
          <div className="header_types"></div>

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
  );
}