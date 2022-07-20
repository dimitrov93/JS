import "./App.css";
import Catalog from "../src/components/Catalog/Catalog";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

import {useEffect, useState} from "react"
import * as gameService from "../../games-play/src/services/gameService";
import LatestGame from "./components/Home/LatestGame";

function App() {
  const [games, setgames] = useState([]);

  const addComment = (gameId, comment) => {
    setgames(state => {
        const game = state.find(x => x._id == gameId)

        const comments = game.comments || [];
        comments.push(comment);

        return [
          ...state.filter(x => x._id !== gameId),
          {...game, comments}
        ]
      })
  }

  useEffect(() => {
         gameService.getAll()
            .then(result => {
              setgames(result)
            })
            .catch(err => console.log(err))
  },[]);

  return (
    <div id="box">
      <Header />
      <main id="main-content"></main>
        <Routes>
            <Route path="/" element={<Home games={games} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/catalog" element={<Catalog games={games} />} />
            <Route path="/catalog/:id" element={<Details games={games} addComment={addComment} />} />
        </Routes>
    </div>
  );
}

export default App;
