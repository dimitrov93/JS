import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import StarShips from "./components/StarShips";
import StarShipsList from "./components/StarShipsList";

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/StarShips" element={<StarShipsList />} />
        <Route path="/StarShips/:StarShipsId" element={<StarShips />} />
        <Route path="/StarShips" element={<StarShips />} />
        <Route path="/pricing/*" element={<Pricing />} />
        <Route path="/pricing/premium" element={<Contacts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/millennium-falcon" element={<Navigate to="/StarShips/10" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
