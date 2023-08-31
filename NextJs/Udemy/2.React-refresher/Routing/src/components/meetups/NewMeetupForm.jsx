import React, { useRef } from "react";
import Card from "../ui/Card";
import "./newmeetup.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const urlRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDesc = descRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredUrl,
      address: enteredAddress,
      description: enteredDesc,
    };

    props.onAddMeetup(meetupData)
  };

  return (
    <Card>
      <form className="form" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={urlRef} />
        </div>
        <div className="control">
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className="control">
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5" ref={descRef}></textarea>
        </div>
        <div className="actions">
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
