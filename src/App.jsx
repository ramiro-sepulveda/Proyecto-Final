import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import Galeria from "./views/Galeria";
import PizzaDetails from "./views/PizzaDetails";
import CarritoList from "./views/CarritoList";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <div className="contenido">
          <Routes>
            <Route path="/proyecto-final/" element={<HomePage />} />
            <Route path="/proyecto-final/pizza/:name" element={<PizzaDetails />} />
            <Route path="/proyecto-final/carrito/" element={<CarritoList />} />
            <Route path="/proyecto-final/galeria/" element={<Galeria />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
