import React from 'react'
import { Link } from "react-router-dom";

const CatalogItem = ({games}) => {
  return (
    <div className="allGames">
    <div className="allGames-info">
      <img src={games.imageUrl} />
      <h6>{games.category}</h6>
      <h2>{games.title}</h2>
      <Link to="#" className="details-button">
        Details
      </Link>
    </div>
  </div>
  )
}

export default CatalogItem