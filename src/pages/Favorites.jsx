export default function Favorites({favorites}) {
  return (
    <div className="favorites_container">
      <h1>Favorites</h1>
      <div className="tracks_container">
        {favorites.map((track, index) => (
          <div className="track_card" key={track.id}>
            <h3 className="number">{index+1}</h3>
            <img src={track.cober} alt={track.title} className="track_cover" />
            <div className="track_info">
              <h3 className="track_title">{track.title}</h3>
              <p className="track_artist">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}