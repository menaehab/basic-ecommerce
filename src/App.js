import "./App.css";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ProductsList />
    </div>
  );
}

export default App;
