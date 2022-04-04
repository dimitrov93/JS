import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"

const logged = (data,onDelete) => html`
                  <div class="actionBtn">
                        <a href="/edit/${data._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    </div>
`;

const detailsTemp = (data, onDelete) => html`
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="${data.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${data.name}</h1>
                        <h3>Artist: ${data.artist}</h3>
                        <h4>Genre: ${data.genre}</h4>
                        <h4>Price: $${data.price}</h4>
                        <h4>Date: ${data.releaseDate}</h4>
                        <p>${data.description}</p>
                    </div>
  
                    ${data._isOwner ? logged(data, onDelete) : nothing}
                </div>
            </div>
        </section>
`;


export async function detailsView(ctx) {
    const id = ctx.params.id
    const data = await appService.details(id);

    if (ctx.user) {
        data._isOwner = data._ownerId == ctx.user._id
    }

    async function onDelete() {
        let conf = confirm('are you sure???')
        if (conf) {
            await appService.del(id)
            ctx.page.redirect('/catalog')
        }
    }

    ctx.render(detailsTemp(data, onDelete))

}