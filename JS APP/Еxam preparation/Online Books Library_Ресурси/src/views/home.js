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

const homeTemp = (books) => html`
       <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-books-list">
                ${books.length > 0 
                ? books.map(book => bookTemp(book)) 
                : html`<p class="no-books">No books in database!</p>`}
            </ul>
        </section>
`;


export async function homeView(ctx) {
    const books = await bookService.getAllBooks();
    ctx.render(homeTemp(books))
}