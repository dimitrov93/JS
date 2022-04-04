import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import * as appService from "../api/appService.js"

const creator = (res,onDelete) => html`
                    <a class="button warning" href="/edit/${res._id}">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>
`;

const detailsTemp = (result, onDelete) => html`
        <section id="meme-details">
            <h1>Meme Title: ${result.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${result.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                    ${result.description}
                    </p>

                    ${result._isOwner ? creator(result,onDelete) : nothing}

                    
                </div>
            </div>
        </section>
`;

export async function detailsView(ctx) {
    let id = ctx.params.id;
    let result = await appService.details(id)
    if (ctx.user) {
        result._isOwner = ctx.user._id == result._ownerId
    }

    async function onDelete(ctx) {
        let conf = confirm('Are you sure??')

        if (conf) {
            await appService.del(id)
            ctx.page.redirect("/")
        }
    }

    ctx.render(detailsTemp(result, onDelete))

}