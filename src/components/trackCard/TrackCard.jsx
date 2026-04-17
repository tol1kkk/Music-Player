export default function TrackCard() {
  return (
    <div className="track-card">
        <div className="trackCard-header">
            <button className="options">
                Зараз
            </button>
             <button className="options">
                Черга
            </button>
             <button className="options">
               Текст
            </button>
        </div>
        <div className="trackCard-body">
            <img src="./public/favicon.svg" alt="" className="track-img"/>
            <div className="track-info">
                <h1 className="trackName">Buildings in fire</h1>
                <h3 className="song-author">blablabla</h3>
            </div>
            <div className="controls">
                
            </div>
        </div>
    </div> 
  );
}