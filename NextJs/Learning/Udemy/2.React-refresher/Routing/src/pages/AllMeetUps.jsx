import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setloadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-refresher-a1d5e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];

        for (const meet in data) {
          const meetup = {
            id: meet,
            ...data[meet]
          }
          meetups.push(meetup)
        }
        setloadedMeetups(meetups)
        setIsLoading(false);
      });
  }, [])
  

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      )
    }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups || DUMMY_DATA} />
    </section>
  );
};

export default AllMeetUps;
