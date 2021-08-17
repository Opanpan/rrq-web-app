import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NavbarRRQ from "./components/NavbarRRQ";
import CarouselRRQ from "./components/CarouselRRQ";
import CarouselStreamer from "./components/CarouselStreamer";
import FirstContent from "./pages/FirstContent";
import LastContent from "./pages/LastContent";
import Footer from "./components/Footer";
import FooterItem from "./components/FooterItem";

function App() {
  return (
    <div>
      <Header />
      <NavbarRRQ />
      <CarouselRRQ />
      <FirstContent />
      <CarouselStreamer />
      <LastContent />
      <Footer />
      <FooterItem />
    </div>
  );
}

export default App;
