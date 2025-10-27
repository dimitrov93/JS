import React from "react";
import Meetupitem from "./Meetupitem";
import "./MeetupList.css";

const MeetupList = (props) => {
  return (
    <ul className="list">
      {props.meetups.map((x) => (
        <Meetupitem
          key={x.id}
          id={x.id}
          image={x.image}
          title={x.title}
          address={x.address}
          description={x.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
