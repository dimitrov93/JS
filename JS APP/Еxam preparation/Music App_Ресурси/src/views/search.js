import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js";

const res = (x, user) => html`
                <div class="card-box">
                    <img src=${x.imgUrl}>
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${x.name}</p>
                            <p class="artist">Artist: ${x.artist}</p>
                            <p class="genre">Genre: ${x.genre}</p>
                            <p class="price">Price: $${x.price}</p>
                            <p class="date">Release Date: ${x.releaseDate}</p>
                        </div>
                      ${user
                        ? html`  <div class="btn-group">
                            <a href="/details/${x._id}" id="details">Details</a>
                        </div>`
                        : nothing}
                    </div>
                </div>
`;

const searchTemp = (onClick, results, user) => html`
        <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${onClick}>Search</button>
            </div>

            <h2>Results:</h2>

            <div class="search-result">

            ${results.length > 0
            ? results.map(x => res(x, user))
            :html`<p class="no-result">No result.</p>`}
                
            </div>



        </section>
`;


export async function searchView(ctx) {
    // const query = Object.fromEntries([...(new URLSearchParams(ctx.querystring)).entries()]);
    // let param = query.search || '';
    // let results = await appService.search(param)


    async function onClick() {
        let input = document.getElementById('search-input')
        let results = await appService.search(input.value)
        ctx.render(searchTemp(onClick, results, ctx.user))

    }

    ctx.render(searchTemp(onClick, [], ctx.user))
}