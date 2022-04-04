import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../api/books.js"

const logged = (book, onDelete) =>html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>
`


const detailsTemp = (book, onDelete, ctx, onLike) => html`
        <section id="details-page" class="details">
        <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${book.isOwner ? logged(book, onDelete) : nothing}

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${book.likeBtn 
                        ? html`<a @click= ${onLike} class="button" href="javascript:void(0)">Like</a>` 
                        : nothing
                        }

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${book.likes}</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;


export async function detailsView(ctx) {
    let id = ctx.params.id
    const book = await bookService.getBookById(id)


    const totalLikes = await bookService.totalLikes(id)
    if (totalLikes) {
        book.likes = totalLikes;
    }


    if (ctx.user) {
        book.isOwner = book._ownerId == ctx.user._id

        const userLiked = await bookService.totalLikesPerUser(id, ctx.user._id)
        book.likeBtn = !book.isOwner && !userLiked

    }
    ctx.render(detailsTemp(book, onDelete, ctx, onLike))

    async function onDelete() {
        let conf = confirm('Are you sure?!')
        if (conf) {
            await bookService.deleteBookById(id);
            ctx.page.redirect('/')
        }
    }

    async function onLike() {
        await bookService.makeLike(id);
        ctx.page.redirect('/details/' + id)
    }
}