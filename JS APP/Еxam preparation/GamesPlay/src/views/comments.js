import * as gamesService from "../api/games.js";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as apiService from "../api/api.js";
import { submitHandler } from "../util.js";
import * as commentsService from "../api/comments.js";


const commTemplate = (comments) =>  html`
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length > 0
                    ? commentsList(comments)
                    : html` <p class="no-comment">No comments.</p>`
                    }

                    <!-- Display paragraph: If there are no games in the database -->
                   
                </div>`;

const commentCard = (comment) => html`                        
<li class="comment">
<p>Content: ${comment.comment}</p>
</li>
`

const commentsList = (comments) => html`                        
                    <ul>
                       ${comments.map(commentCard)}
                    </ul>
`

export async function commentsView(gameId) {
    const comments = await commentsService.getByGameId(gameId);
    return commTemplate(comments)
}