import * as gamesService from "../api/games.js";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as apiService from "../api/api.js";
import { submitHandler } from "../util.js";
import * as commentsService from "../api/comments.js";


const formTemp = (onSubmit) => html`
<article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onSubmit}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
`;

export function commentFormView(ctx, isOwner) {
    if (ctx.user && !isOwner) {
        return formTemp(submitHandler(ctx, onSubmit))
    } else {
        return nothing
    }
}


async function onSubmit(ctx, data, e) {
    const gameId = ctx.params.id

    await commentsService.postComment({
        gameId,
        comment: data.comment
    });

    e.target.reset();
    ctx.page.redirect(`/details/${gameId}`)
}