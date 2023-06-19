import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
// import React from "react";

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post?.body?.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

// REACT MEMO OPTIMIZATION
// PostsExcerpt = React.memo(PostsExcerpt)
export default PostsExcerpt;
