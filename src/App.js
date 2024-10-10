import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
