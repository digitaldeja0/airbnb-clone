import "./style.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ListingItemsSection from "./component/ListingItemsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ListingItemsSection />
    </div>
  );
}

export default App;
