import { useState } from "react";
import {useEffect} from 'react'
import styles from  './Book.module.css';

export const Book = (props) => {
    const [highlited, setHighlited] = useState(false)
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        console.log('mounting');
      }, [])

    useEffect(() => {
        console.log('updateing');
      }, [highlited, deleted])

    const clickHandler = () => {
        setHighlited(state => !state);
    }

    const doubleClickHandler = () => {
        setDeleted(state => !state);
    }


    let style = {};

    if (highlited) {
        style.backgroundColor ='gray';
    }

    if (deleted) {
        style.backgroundColor ='red';
    }


    if (deleted) {
      return <h2>Deleted</h2>
    }

  return (
    <li style={style} className={styles['book-item']}>
      <article>
        <h2>Title: {props.title}</h2>
        <main>Price: ${props.price}</main>
        <footer>
            <button onClick={clickHandler}>Highlight</button>
            <button onDoubleClick={doubleClickHandler}>Delete</button>
          <span className={styles.author}>Author: {props.author}</span>
        </footer>
      </article>
    </li>
  );
};
