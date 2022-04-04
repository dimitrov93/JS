import {html} from "../../node_modules/lit-html/lit-html.js"
import * as gamesService from "../api/games.js";

const gameCard = (x) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${x.imageUrl}>
                    <h6>${x.category}</h6>
                    <h2>${x.title}</h2>
                    <a href="/details/${x._id}" class="details-button">Details</a>
                </div>
`


const profileTemp = (allGames) => html`
            <section id="catalog-page">
            <h1>All Games</h1>

            ${allGames.length > 0 
            ? allGames.map(x => gameCard(x))
            : html`<h3 class="no-articles">No articles yet</h3>`
            }
        </section>`;

export async function profilePage(ctx){
    //profile
    const userId = ctx.params.userId || ctx.user._id
    const games = await gamesService.getMyGames(userId)
    ctx.render(profileTemp(games))
}