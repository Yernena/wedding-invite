import PetalRain from "./components/PetalRain";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Wishes from "./components/Wishes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Background Effects */}
      <PetalRain />
      <MusicPlayer />

      {/* Main Story */}
      <Hero />
      <Couple />
      <Events />
      <Gallery />
      <Venue />
      <Wishes />
      <Footer />
    </>
  );
}

export default App;
