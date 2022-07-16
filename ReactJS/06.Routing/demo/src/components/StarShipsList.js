import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const StarShipsList = () => {
    const [starShips, setStartShip] = useState([]);

    useEffect(() => {
      fetch(`https://swapi.dev/api/starships`)
        .then((res) => res.json())
        .then((result) => {
            setStartShip(result.results);
        });
    }, []);

  return (
    <>
    <ul>
        {starShips.map( (x, i) => <li><Link key={x.name} to={`/starships/${i + 1}`}>{x.name}</Link></li>)}
    </ul>
    </>
  )
}

export default StarShipsList