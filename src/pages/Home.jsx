import "./home.css";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext.jsx"
export default function Home({tracks, addToFavorites}) {

 const { playTrack } = useContext(PlayerContext);
  return (
    <div className="home_container">
       <div className="header_types">
          <h1>New Releases</h1>
          <div className="buttons_types">
            <button className="home_button">Всі</button>
            <button className="home_button">поп</button>
            <button className="home_button">електро</button>
            <button className="home_button">рок</button>
          </div>
       </div>
        <div className="tracks_container">
          {tracks.map((track) => (
            <div className="track_card" key={track.id} onClick={() => playTrack(track)}>
                <h3 className="number">{track.id}</h3>
                <img src={track.cober} alt={track.title} className="track_cover" />
                <div className="track_info">
                    <h3 className="track_title">{track.title}</h3>
                    <p className="track_artist">{track.artist}</p>
                </div>
                <img src="/public/heart.png" alt="" className="liked" onClick={(e) => {e.stopPropagation(); addToFavorites(track);}}/>
            </div>
          ))}

        </div>
    </div>
  );
}