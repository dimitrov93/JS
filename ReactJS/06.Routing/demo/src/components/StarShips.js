import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link, Route, Routes } from "react-router-dom";


const StarShips = () => {
  const [starShip, setstarShip] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { StarShipsId } = useParams();
  //   const params = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${StarShipsId}/`)
      .then((res) => res.json())
      .then((result) => {
        setstarShip(result);
      });
  }, [StarShipsId]);

  const nextProductHandler = () => {
    navigate(`/StarShips/${Number(StarShipsId) + 1}`)
  }
//   const nextProductHandler = () => {
//     navigate(`/StarShips/${Number(StarShipsId) + 1}`, {replace: true})
//   }

  const previousProductHandler = () => {
    navigate(`/StarShips/${Number(StarShipsId) - 1}`)
  }

  return (
    <>
      <h1>Productsssssss</h1>
      <h2>products Speficication {StarShipsId}</h2>
      {/* <h2>products Speficication {params.productsId}</h2> */}
      <ul>
        <li>Name: {starShip.name}</li>
        <li>Model: {starShip.model}</li>
      </ul>

      <h3>Movies</h3>

      <nav>
        <ul>
          {starShip.films?.map((x,i) => {
            <li key={x}><Link  to={`/StarShips/${StarShipsId}/film/${i}`}>Film {i}</Link> </li>
          })}
        </ul>
      </nav>

      <section>
        <Routes>
        <Route path={`/films/1`} element={<h3>Film 1</h3>} />
        <Route path={`/films/2`} element={<h3>Film 2</h3>}/>
        <Route path={`/films/3`} element={<h3>Film 3</h3>}/>
        </Routes>
      </section>

      <button onClick={previousProductHandler}>Previous</button>
      <button onClick={nextProductHandler}>Next</button>
    </>
  );
};

export default StarShips;
