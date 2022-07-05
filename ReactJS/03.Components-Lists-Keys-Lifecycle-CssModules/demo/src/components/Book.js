export const Book = (props) => {
  return (
    <li>
      <article>
        <h2>Title: {props.title}</h2>
        <main>Price: ${props.price}</main>
        <footer>
          <span>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
