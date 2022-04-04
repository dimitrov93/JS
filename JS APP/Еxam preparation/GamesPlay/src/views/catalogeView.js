import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
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


const catalogueTemp = (allGames, page, pages) => html`
            <section id="catalog-page">
            <h1>All Games</h1>

            <div class="levels">
                Page : ${page} of ${pages}
                ${page > 1 ? html `<a href="/catalog?page=${page - 1}">&lt Prev </a>` : nothing }
                ${page < pages ? html `<a href="/catalog?page=${page + 1}">Prev &gt </a>` : nothing }
                
            </div>

            ${allGames.length > 0 
            ? allGames.map(x => gameCard(x))
            : html`<h3 class="no-articles">No articles yet</h3>`
            }
        </section>`;

export async function catalogueView(ctx){
    //pagination
    const query = Object.fromEntries([...(new URLSearchParams(ctx.querystring)).entries()]);
    const page = Number(query.page || 1);
    const [allGames, pages] = await Promise.all([
        gamesService.getAll(page),
        gamesService.getCount()
    ]);
    ctx.render(catalogueTemp(allGames, page, pages))
}