import React, { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'
import Card from '../ui/Card'
import './MeetupItem.css'


const Meetupitem = (props) => {
  const favCtx = useContext(FavoritesContext);

  const itemIsFavorite = favCtx.itemIsFavorite(props.id);

  const toggleFavStatusHandler = () => {
    if (itemIsFavorite) {
      favCtx.removeFavorite(props.id)
    } else {
      favCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
  
    }
  }
  return (
    <li className='item'>
      <Card>
        <div className='image'>
            <img src={props.image} alt="" />
        </div>
        <div className='content'>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className='actions'>
            <button onClick={toggleFavStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : "To Favorites"}</button>
        </div>
        </Card>
    </li>
  )
}

export default Meetupitem