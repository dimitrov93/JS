import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid.js";

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
