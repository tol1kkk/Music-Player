import Navbar from "./components/Navbar/Navbar.jsx";
import tracks from "./data/track.js";
export default function App() {
      return (
        <div className="container">
          <TrackCard/>
          <main className="main">
            <div className="header_types"></div>
            <section className="music_list">
              
            </section>
            <Navbar/>
          </main>
        </div>
        // <BrowserRouter> 
        //   <Navbar /> 
        //   <Routes> 
        //     <Route path='/' element={<Home/>}/> 
        //     <Route path='/search' element={<Search/>}/> 
        //     <Route path='/favorites' element={<Favorites/>}/> 
        //   </Routes> 
        //   <PlayerBar />
        // </BrowserRouter> 
      );
}