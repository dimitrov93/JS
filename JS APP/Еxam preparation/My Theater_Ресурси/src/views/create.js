import {html, render} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"
import {submitHandler} from "../util.js"

const createTemp = (onSubmit) => html`
        <section id="createPage">
            <form class="create-form" @submit=${onSubmit}>
                <h1>Create Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author">
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;


export async function createView(ctx) {
    
    async function onSubmit(ctx,data,e) {
        if (Object.values(data).some(x => x=='')) {
            return alert('All fields are required!')
        }
        await appService.create({
            title: data.title,
            date: data.date,
            author: data.author,
            imageUrl: data.imageUrl,
            description: data.description
        })

        e.target.reset();
        ctx.page.redirect('/')
    }

    ctx.render(createTemp(submitHandler(ctx, onSubmit)))
}