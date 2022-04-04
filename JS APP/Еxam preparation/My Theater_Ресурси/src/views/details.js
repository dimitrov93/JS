import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"

const logged = (data,onDelete) => html`
                <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${data._id}">Edit</a>
`;

const detailsTemp = (data,onDelete, onLike) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${data.title}</h1>
                    <div>
                        <img src=${data.imageUrl} />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${data.description}</p>
                    <h4>Date: ${data.date}</h4>
                    <h4>Author: ${data.author}</h4>
                    <div class="buttons">
                        ${data._isOwner ? logged(data,onDelete) : nothing}
                        ${data._canLike ? html`<a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>` : nothing}
                    </div>
                    <p class="likes">Likes: ${data.likes}</p>
                </div>
            </div>
        </section>
`;


export async function detailsView(ctx) {
    let id = ctx.params.id
    let data = await appService.details(id);


    const [likes, hasLiked] = await Promise.all([
        appService.getLikes(id),
        appService.hasLiked(id, ctx.user)
    ]);
    data.likes = likes

    if (ctx.user) {
        data._isOwner = ctx.user._id == data._ownerId
        data._canLike = !data._isOwner && !hasLiked
    }
    ctx.render(detailsTemp(data,onDelete, onLike))

    async function onDelete() {
        let conf = confirm('Are you sure?')
        if (conf) {
            await appService.del(id)
            ctx.page.redirect('/')
        }
    }

    async function onLike() {
        await appService.clickLike(id);
        ctx.page.redirect('/details/' + id)
    }
}