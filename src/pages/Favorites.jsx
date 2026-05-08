export default function Favorites({favorites, toggleFavorite}) {
  return (
    <div className="favorites_container">
      <div className="fav_haeder">
        <h1>Favorites</h1>
      </div>
      <div className="tracks_container">
        {favorites.map((track, index) => (
          <div className="track_card" key={track.id}>
            <h3 className="number">{index+1}</h3>
            <img src={track.cober} alt={track.title} className="track_cover" />
            <div className="track_info">
              <h3 className="track_title">{track.title}</h3>
              <p className="track_artist">{track.artist}</p>
            </div>
            <img src={
                  favorites.some((item) => item.id === track.id)
                    ? "/heart-filled.png"
                    : "/heart.png"
                  }
                  alt="Like "
                  className="liked"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(track);
                }}/>
          </div>
        ))}
      </div>
    </div>
  );
}