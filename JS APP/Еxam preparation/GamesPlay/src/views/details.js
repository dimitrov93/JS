import { html, nothing } from "../../node_modules/lit-html/lit-html.js"
import * as apiService from "../api/api.js";
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"
import * as gamesService from "../api/games.js";
import { commentsView } from "./comments.js";
import { commentFormView } from "./commentForm.js";

const logged = (game, onDelete) => html`
              <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click = ${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>`
 

const detailsTemp = (game, commentsSection, onDelete, commentFormSection, onLike, onDislike) => html`
          <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <span class="levels">Likes: ${game.likes}</span>
                    
                    ${game.canLike
                    ? html`
                    <div class="buttons">
                    <a @click=${onLike} href="javascript:void(0)" class="button">Like</a>
                    </div>`
                    :nothing}

                    ${game.canDislike
                    ? html`
                    <div class="buttons">
                    <a @click=${onDislike} href="javascript:void(0)" class="button">Dislike</a>
                    </div>`
                    :nothing}

                    <p class="type"><a href="/myGames/${game._ownerId}">Games by this user</a></p>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">${game.summary}</p>

                ${commentsSection}

                ${game.isOwner ? logged(game, onDelete) : nothing}

  
            </div>
 
            
                    ${commentFormSection}
        </section>`;

export async function detailsView(ctx) {
    let gameId = ctx.params.id;
    const [ game, commentsSection] = await Promise.all([
        gamesService.getGameId(gameId),
        commentsView(gameId)
    ]);

    // likes and dislikes //
    // const [likes, hasLiked] = await Promise.all([
    //     gamesService.getLikes(gameId),
    //     gamesService.hasLiked(gameId, ctx.user)
    // ]);
    // game.likes = likes

    if (ctx.user) {
        game.isOwner = ctx.user._id == game._ownerId;
        // game.canLike = !game.isOwner && !hasLiked
        // game.canDislike = !game.isOwner && hasLiked
    }
    
    const commentFormSection = commentFormView(ctx, game.isOwner);



    ctx.render(detailsTemp(game, commentsSection, onDelete, commentFormSection))

    async function onDelete() {
        let conf = confirm('Are you sure?')
        if (conf) {
            await gamesService.del(gameId)
            ctx.page.redirect('/')
        }
    }

    async function onLike() {
        await gamesService.likeGame(gameId);
        ctx.page.redirect('/details/' + gameId)
    }

    async function onDislike() {
        await gamesService.dislikeGame(hasLiked._id);
        ctx.page.redirect('/details/' + gameId)
    }
}

