import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../api/books.js"

const bookTemp = (book) => html`
                <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>
`

const mybooksTemp = (myBooks) => html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            <ul class="my-books-list">
                ${myBooks.length > 0 
                ? myBooks.map(book => bookTemp(book))
                : html`<p class="no-books">No books in database!</p>`
                }
            </ul>
        </section>
`;


export async function myBooksView(ctx) {

    if (ctx.user._id) {
        let myBooks = await bookService.getMyBooks(ctx.user._id)
        ctx.render(mybooksTemp(myBooks))
    }
}