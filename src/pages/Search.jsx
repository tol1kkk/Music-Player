import { useState } from "react";
import { useContext } from "react";
import "./search.css";
import tracks from "../data/track.js";
import { PlayerContext } from "../context/PlayerContext.jsx"

export default function Search() {
  const { playTrack } = useContext(PlayerContext);
  
  const [query, setQuery] = useState("");

  const normalizedQuery = query.toLowerCase().trim();

  const filteredTracks = tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(normalizedQuery) ||
      track.artist.toLowerCase().includes(normalizedQuery),
  );

  const showTracks = normalizedQuery ? filteredTracks : tracks;

  return (
    <div className="search-page">
      {/* 🔍 SEARCH */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search songs, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery("")}>
            ✖
          </button>
        )}
      </div>

      {/* TITLE */}
      <h2 className="search-title">
        {query ? "Search results" : "Recommended"}
      </h2>

      {/* LIST */}
      <div className="tracks-list">
        {showTracks.length === 0 ? (
          <p className="empty-text">No tracks found</p>
        ) : (
          showTracks.map((track, index) => (
            <div key={track.id} className="track-row" onClick={() => playTrack(track)}>
              <span className="track-index">{index + 1}</span>

              <div className="track-main">
                <img src={track.cober} alt={track.title} className="track_cover" />
                <div>
                  <p className="track-title">{track.title}</p>
                  <p className="track-artist">{track.artist}</p>
                </div>
              </div>

              <span className="track-album">{track.album}</span>
              <span className="track-time">{track.time}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
