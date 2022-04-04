import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as musicService from '../authServices/musicServer.js'

const searchTemp = (searchHandler, results, isAuthenticated) => html`
                  <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list" @click=${searchHandler}>Search</button>
            </div>

            <h2>Results:</h2>
            ${results.length > 0 
            ? html`${results.map(x => cardTemplate(x, isAuthenticated))}`
            : html`<p class="no-result">No result.</p>`
            }
            

                
            </div>
        </section>`;

const detailsTemp = (id) => html`
<div class="btn-group">
     <a href="/album/${id}" id="details">Details</a>
 </div>`;

const cardTemplate = (x, isAuthenticated) => html`
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
                    ${isAuthenticated 
                    ? detailsTemp(x._id)
                    : nothing
                    }
                </div>
            </div>
`;


export const searchView = (ctx) => {

    const serachHandler = (e) => {
        let searchElement = document.getElementById('search-input')

        musicService.search(searchElement.value)
        .then(result => {
            ctx.render(searchTemp(serachHandler, result, ctx.user.email))
        })
    }
    ctx.render(searchTemp(serachHandler, [], ctx.user.email))
}