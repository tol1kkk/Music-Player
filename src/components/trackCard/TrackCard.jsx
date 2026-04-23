import "./trackCard.css";
import { useContext, useRef, useEffect, useState } from "react";
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

  const audioRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleTimeUpdate = () => {
      const current = audio.currentTime || 0;
      const fullDuration = audio.duration || 0;

      setCurrentTime(current);

      if (fullDuration > 0) {
        setProgress((current / fullDuration) * 100);
      } else {
        setProgress(0);
      }
    };

    const handleEnded = () => {
      setProgress(0);
      setCurrentTime(0);
      nextTrack();
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, nextTrack]);

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack(currentTrack);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);

    if (!audioRef.current || !duration) return;

    const newTime = (newProgress / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!currentTrack) {
    return (
      <div className="track-card">
        <p className="empty-text">No track selected</p>
      </div>
    );
  }

  return (
    <div className="track-card">
      <div className="player-glow player-glow-one"></div>
      <div className="player-glow player-glow-two"></div>

      <div className="container_track-card">
        <audio ref={audioRef} src={currentTrack.src} />

        <div className="trackCard-header">
          <button className="options active">Зараз</button>
          <button className="options">Черга</button>
          <button className="options">Текст</button>
        </div>

        <div className="trackCard-body">
          <div className="cover-wrap">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="track-img"
            />
          </div>

          <div className="track-info">
            <p className="now-playing">NOW PLAYING</p>
            <h1 className="trackName">{currentTrack.title}</h1>
            <h3 className="song-author">
              {currentTrack.artist} • {currentTrack.album}
            </h3>
          </div>

          <div className="controls">
            <div className="time-row">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="lenghtSong"
              style={{
                background: `linear-gradient(
                  to right,
                  #C43302 0%,
                  #C43302 ${progress}%,
                  #B7BF99 ${progress}%,
                  #B7BF99 100%
                )`,
              }}
            />

            <div className="buttons">
              <button className="mini-btn">⇄</button>

              <button className="control-btn small" onClick={prevTrack}>
                ⏮
              </button>

              <button
                className="control-btn play-btn"
                onClick={handlePlayPause}
              >
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
                style={{
                  background: `linear-gradient(
                    to right,
                    #0A7373 0%,
                    #0A7373 ${volume * 100}%,
                    #B7BF99 ${volume * 100}%,
                    #B7BF99 100%
                  )`,
                }}
              />

              <span className="volume-icon">🔊</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}