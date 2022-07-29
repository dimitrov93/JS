import "./App.css";
import Catalog from "../src/components/Catalog/Catalog";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import uniqid from "uniquid";

import { useEffect, useState, lazy, Suspense } from "react";
import * as gameService from "../../games-play/src/services/gameService";
import { AuthContext } from "./context/authContext";
import Logout from "./components/Logout";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { GameContext, gameContext } from "./context/GameContext";



// import Register from "./components/Register";
const Register = lazy(() => import("./components/Register"));

function App() {
    const [games, setgames] = useState([]);
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
      setAuth(authData)
    } 

    const userLogout = () => {
      setAuth({})
    }

    const addComment = (gameId, comment) => {
      setgames((state) => {
        const game = state.find((x) => x._id == gameId);

        const comments = game.comments || [];
        comments.push(comment);

        return [...state.filter((x) => x._id !== gameId), { ...game, comments }];
      });
    };

    useEffect(() => {
      gameService
        .getAll()
        .then((result) => {
          setgames(result);
        })
        .catch((err) => console.log(err));
    }, []);

    const addGameHandler = (gameData) => {
      setgames((state) => [
        ...state,
        gameData
      ]);
      navigate('/catalog')
    };

    const gameEdit = (gameId, gameData) => {
      setgames(state => state.map(x => x._id === gameId ? gameData : x))
    }

    return (
      <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
      <div id="box">
        <Header />

        <GameContext.Provider value={{games, addGameHandler , gameEdit}} >
        <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={
            <Suspense fallback={<span>Loading....</span>}>
              <Register />
            </Suspense>
          } />
          <Route
            path="/Create"
            element={<Create />}
          />
          <Route path="/games/:gameId/edit" element={<Edit />} />
          <Route path="/catalog" element={<Catalog games={games} />} />
          <Route
            path="/catalog/:id"
            element={<Details games={games} addComment={addComment} />}
          />
        </Routes>
        </main>
        </GameContext.Provider>
      </div>
      </AuthContext.Provider>
    );
  }

export default App;
