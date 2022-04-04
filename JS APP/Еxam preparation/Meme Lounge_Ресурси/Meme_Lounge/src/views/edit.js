import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import * as appService from "../api/appService.js"
import { submitHandler } from "../util.js";


const editTemp = (meme,onSubmit) => html`
        <section id="edit-meme">
            <form id="edit-form" @submit=${onSubmit}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title"></label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}> </textarea>
                    <label for="imageUrl"></label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;

export async function editView(ctx) {
    let id = ctx.params.id
    let meme = await appService.details(id);

    ctx.render(editTemp(meme, submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {
    let id = ctx.params.id

    if (Object.values(data).some(x => x=='')) {
        return alert('All fields are required')
    }

    await appService.edit(id, {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl
    })

    e.target.reset();
    ctx.page.redirect(`/details/${id}`)
}