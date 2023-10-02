import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    if (!showComments) {
      fetch('/api/comment/' + eventId)
      .then(res => res.json())
      .then(data => {
        setComments(data.comments)
      })
    }
  },[showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
    
    
  }

  function addCommentHandler(commentData) {
    fetch('/api/comment/' + eventId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
