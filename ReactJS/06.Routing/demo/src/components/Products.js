import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Products = () => {
  const [starShip, setstarShip] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { productsId } = useParams();
  //   const params = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${productsId}/`)
      .then((res) => res.json())
      .then((result) => {
        setstarShip(result);
      });
  }, [productsId]);

  const nextProductHandler = () => {
    navigate(`/products/${Number(productsId) + 1}`)
  }
//   const nextProductHandler = () => {
//     navigate(`/products/${Number(productsId) + 1}`, {replace: true})
//   }

  const previousProductHandler = () => {
    navigate(`/products/${Number(productsId) - 1}`)
  }

  return (
    <>
      <h1>Productsssssss</h1>
      <h2>products Speficication {productsId}</h2>
      {/* <h2>products Speficication {params.productsId}</h2> */}
      <ul>
        <li>Name: {starShip.name}</li>
        <li>Model: {starShip.model}</li>
      </ul>

      <button onClick={previousProductHandler}>Previous</button>
      <button onClick={nextProductHandler}>Next</button>
    </>
  );
};

export default Products;
