import { Book } from "./Book";


export const BookList = (props) => {
  // const bookElements = props.books.map(book => <Book 
  //   title={book.title} year={book.year} price={book.price}  author={book.author}
  //   />);

  // const bookElements = props.books.map(book => <Book {...book} />);

  // return (
  // <ul>
  //   {bookElements}
  // </ul>
  // );

    return (
  <ul>
    {props.books.map((book, i) => <Book key={i} {...book} />)}
  </ul>
  );
};
