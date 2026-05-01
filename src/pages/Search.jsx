import { useState } from "react";
import "./search.css";
import tracks from "../data/track.js";

export default function Search() {
  const [query, setQuery] = useState("");

  const filteredTracks = tracks.filter((track) =>
    track.title.toLowerCase().includes(query.toLowerCase()) ||
    track.artist.toLowerCase().includes(query.toLowerCase())
  );

  const showTracks = query ? filteredTracks : tracks;

  return (
    <div className="search-page">
      
      {/* 🔍 SEARCH INPUT */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search songs or artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* 🧠 TITLE */}
      <h2 className="search-title">
        {query ? "Search results" : "Recommended"}
      </h2>

      {/* 🎵 LIST */}
      <div className="tracks-list">
        {showTracks.length === 0 ? (
          <p className="empty-text">No tracks found</p>
        ) : (
          showTracks.map((track, index) => (
            <div key={track.id} className="track-row">
              
              <span className="track-index">{index + 1}</span>

              <div className="track-main">
                <div className="track-cover"></div>
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