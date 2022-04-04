import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"


const cardTemp = (data, user) => html`
            <div class="card-box">
                <img src=${data.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${data.name}</p>
                        <p class="artist">Artist: ${data.artist}</p>
                        <p class="genre">Genre: ${data.genre}</p>
                        <p class="price">Price: $${data.price}</p>
                        <p class="date">Release Date: ${data.releaseDate}</p>
                    </div>

                    ${user
                    ? html`<div class="btn-group">
                        <a href="/details/${data._id}" id="details">Details</a>
                    </div>`
                    : nothing
                    }
                    
                </div>
            </div>
`;

const catalogTemp = (data, user) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
            ${data.length > 0
            ? data.map(x=> cardTemp(x, user))
            : html`<p>No Albums in Catalog!</p>`
            }
        </section>
`;


export async function catalogView(ctx) {
    const data = await appService.getAll();
    console.log(data);
    ctx.render(catalogTemp(data, ctx.user))

}