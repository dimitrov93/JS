import React, { useState } from "react";
import { buildFeedbackPath, extraFeddback } from "../api/feedback";

const feedbackPage = (props) => {
  const [feedBackData, setfeedBackData] = useState(null);

  function loadFeedbackHanler(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setfeedBackData(data.feedback);
      });
  }

  return (
    <>
      {feedBackData && <p>{feedBackData.email}</p>}
      <ul>
        {props.feedBackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHanler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extraFeddback(filePath);

  return {
    props: {
      feedBackItems: data,
    },
  };
}

export default feedbackPage;
