import "./trackCard.css";
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
            <img src="./public/image.png" alt="" className="track-img"/>
            <div className="track-info">
                <h1 className="trackName">Spirit Crusher</h1>
                <h3 className="song-author">Death</h3>
            </div>
            <div className="controls">
                <input type="range" className="lenghtSong" />
                <div className="buttons">
                    <button className="control-btn">
                        <img src="./public/rewind.png" alt="" className = "image-controllerPrev"/>
                    </button>
                    <button className="control-btn">
                        <img src="./public/play-button.png" alt="" className = "image-controllerPause-play"/>
                    </button>
                    <button className="control-btn">
                        <img src="./public/next-button.png" alt="" className = "image-controllerNext"/>
                    </button>
                </div>
                <div className="voise-controller"></div>
            </div>
        </div>
    </div> 
  );
}