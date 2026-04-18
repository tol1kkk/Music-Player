import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import "./trackCard.css";

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
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useContext(PlayerContext);

  if (!currentTrack) {
    return (
      <div className="track-card">
        <p>No track selected</p>
      </div>
    );
  }

  const isFavorite = favorites.some((item) => item.id === currentTrack.id);

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack(currentTrack);
    }
  };

  const handleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(currentTrack.id);
    } else {
      addToFavorites(currentTrack);
    }
  };

  return (
    <div className="track-card">
      <div className="trackCard-header">
        <button className="options">Зараз</button>
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
          <h3 className="song-author">{currentTrack.artist}</h3>
          <p className="song-album">{currentTrack.album}</p>
        </div>

        <div className="controls">
          <input
            type="range"
            min="0"
            max="100"
            value={isPlaying ? 50 : 0}
            readOnly
            className="lenghtSong"
          />

          <div className="buttons">
            <button className="control-btn" onClick={prevTrack}>
              ⏮
            </button>

            <button className="control-btn" onClick={handlePlayPause}>
              {isPlaying ? "⏸" : "▶"}
            </button>

            <button className="control-btn" onClick={nextTrack}>
              ⏭
            </button>
          </div>

          <div className="voice-controller">
            <label htmlFor="volume">Volume</label>
            <input
              id="volume"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>

          <button className="favorite-btn" onClick={handleFavorite}>
            {isFavorite ? "♥ Remove from favorites" : "♡ Add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}