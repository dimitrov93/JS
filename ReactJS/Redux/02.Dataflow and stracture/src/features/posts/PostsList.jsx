import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderedPosts = orderPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <p className="postCredit">
                <PostAuthor userId={post.userId} /> 
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList