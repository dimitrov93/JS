import React from 'react'
import Card from '../ui/Card'
import './MeetupItem.css'
const Meetupitem = (props) => {
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
            <button>To favorites</button>
        </div>
        </Card>
    </li>
  )
}

export default Meetupitem