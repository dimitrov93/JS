import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Details = ({ games, addComment }) => {
  const gameId = useParams();
  const [comment, setcomment] = useState({
    username: "",
    comment: "",
  });

  const game = games.find((x) => x._id == gameId.id);

  const addCommentHandler = (e) => {
    e.preventDefault();

    const commentResult = `${comment.username}: ${comment.comment}`;
    addComment(gameId.id, commentResult);
  };

  const onChange = (e) => {
    setcomment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* list all comments for current game (If any) */}
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          {/* Display paragraph: If there are no games in the database */}
          <p className="no-comment">No comments.</p>
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <Link to="#" className="button">
            Edit
          </Link>
          <Link to="#" className="button">
            Delete
          </Link>
        </div>
      </div>
      {/* Bonus */}
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input
            type="text"
            name="username"
            placeholder="John deer"
            onChange={onChange}
            value={comment.username}
          />

          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment.comment}
          />

          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    </section>
  );
};

export default Details;
