import "./trackCard.css";
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

export default function TrackCard() {
  const {
    currentTrack,
    isPlaying,
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    volume,
    setVolume,
  } = useContext(PlayerContext);

  if (!currentTrack) {
    return (
      <div className="track-card">
        <p className="empty-text">No track selected</p>
      </div>
    );
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack(currentTrack);
    }
  };

  return (
    <div className="track-card">
      <div className="trackCard-header">
        <button className="options active">Зараз</button>
        <button className="options">Черга</button>
        <button className="options">Текст</button>
      </div>

      <div className="trackCard-body">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="track-img"
        />

        <div className="track-info">
          <h1 className="trackName">{currentTrack.title}</h1>
          <h3 className="song-author">
            {currentTrack.artist} • {currentTrack.album}
          </h3>
        </div>

        <div className="controls">
          <div className="time-row">
            <span>1:24</span>
            <span>3:20</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={35}
            readOnly
            className="lenghtSong"
          />

          <div className="buttons">
            <button className="mini-btn">⇄</button>

            <button className="control-btn small" onClick={prevTrack}>
              ⏮
            </button>

            <button className="control-btn play-btn" onClick={handlePlayPause}>
              {isPlaying ? "⏸" : "▶"}
            </button>

            <button className="control-btn small" onClick={nextTrack}>
              ⏭
            </button>

            <button className="mini-btn">↻</button>
          </div>

          <div className="voise-controller">
            <span className="volume-icon">🔉</span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="volume-range"
            />

            <span className="volume-icon">🔊</span>
          </div>
        </div>
      </div>
    </div>
  );
}