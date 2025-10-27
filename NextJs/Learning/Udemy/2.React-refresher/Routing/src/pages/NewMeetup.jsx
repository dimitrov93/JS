import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom'

const NewMeetup = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch('https://react-refresher-a1d5e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(() => {
      navigate('/')
    })
  }
  
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup