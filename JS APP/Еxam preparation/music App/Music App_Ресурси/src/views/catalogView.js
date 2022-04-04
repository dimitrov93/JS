import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as musicServer from "../authServices/musicServer.js";

const detailsTemp = (id) => html`
                   <div class="btn-group">
                        <a href="/album/${id}" id="details">Details</a>
                    </div>`;

const cardTemplate = (isAuthenticated, x) => html`
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

const catalogTempl = (isAuthenticated, data) => html`
            <h1>All Albums</h1>

            ${data.length > 0 
            ? html`
            ?<section id="catalogPage">
            ${data.map(x => cardTemplate(isAuthenticated, x))}`
            : html`
            <p>No Albums in Catalog!</p>`
            }`;


export const catalogView = (ctx) => {
    musicServer.getAlbums()
    .then(data => {
        ctx.render(catalogTempl(ctx.user.email, data))
    })
    
}