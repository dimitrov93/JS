import "./App.css";
import Catalog from "./components/Catalog";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content"></main>
      <Home />
      <Login />
      <Register />
      <Create />
      <Edit />
      <Details />
      <Catalog />
    </div>
  );
}

export default App;
