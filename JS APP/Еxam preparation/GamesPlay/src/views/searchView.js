import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as gamesService from "../api/games.js";
import { submitHandler } from "../util.js";

const gameCard = (x) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${x.imageUrl}>
                    <h6>${x.category}</h6>
                    <h2>${x.title}</h2>
                    <a href="/details/${x._id}" class="details-button">Details</a>
                </div>
`


const searchTemp = (allGames,param, onSubmit) => html`
            <section id="catalog-page">
            <h1>Search</h1>
            <form @submit = ${onSubmit}>
                <input type="text" name="search" .value=${param}>
                <input type="submit" value="search">
            </form>

            ${allGames.length > 0 
            ? allGames.map(x => gameCard(x))
            : html`<h3 class="no-articles">No articles yet</h3>`
            }
        </section>`;

export async function searchPage(ctx){
    //pagination
    const query = Object.fromEntries([...(new URLSearchParams(ctx.querystring)).entries()]);
    let param = query.search || ''
    const games = await gamesService.searchGames(param)
    
    ctx.render(searchTemp(games, param, submitHandler(ctx,onSubmit)))

    async function onSubmit(ctx,data,e) {
        ctx.page.redirect('/search?search=' + encodeURIComponent(data.search))
    }
}