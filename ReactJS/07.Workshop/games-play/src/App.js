import "./App.css";
import Catalog from "./components/Catalog";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content"></main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Catalog" element={<Catalog />} />
        </Routes>
    </div>
  );
}

export default App;
