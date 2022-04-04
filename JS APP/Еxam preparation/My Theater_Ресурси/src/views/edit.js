import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"
import { submitHandler } from "../util.js";

const editTemp = (results, onSubmit) => html`
        <section id="editPage">
            <form class="theater-form" @submit=${onSubmit}>
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${results.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${results.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                        .value=${results.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description" .value=${results.description}></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        .value=${results.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;

export async function editView(ctx) {
    let id = ctx.params.id
    let results = await appService.details(id);
    ctx.render(editTemp(results, submitHandler(ctx,onSubmit)))

    async function onSubmit(ctx,data,e) {

        if (Object.values(data).some(x => x=='')) {
            return alert('All fields are required!')
        }
        
        let id = ctx.params.id
        await appService.edit(id, {
            title: data.title,
            date: data.date,
            author: data.author,
            description: data.description,
            imageUrl: data.imageUrl,
        });
        e.target.reset();
        ctx.page.redirect('/')

    }
}