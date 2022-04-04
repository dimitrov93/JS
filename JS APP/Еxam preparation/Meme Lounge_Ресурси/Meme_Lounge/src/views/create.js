import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../util.js";
import * as appService from "../api/appService.js"

const createTemp = (onSubmit) => html`
        <section id="create-meme">
            <form id="create-form" @submit = ${onSubmit}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`;

export async function createView(ctx) {
    ctx.render(createTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx, data,e) {
    if (Object.values(data).some(x => x=='')) {
        return alert('All fields must filled properly!')
    }

    await appService.create({
        title: data.title ,
        description: data.description ,
        imageUrl: data.imageUrl ,
    })

    e.target.reset();
    ctx.page.redirect('/all')
}