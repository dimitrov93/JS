import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as bookService from "../api/books.js"

const createTemp = (onSubmit) => html`
        <section id="create-page" class="create">
            <form id="create-form" action="" method="POST" @submit=${onSubmit}>
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>
`;


export function createView(ctx) {
    ctx.render(createTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {


    if(Object.values(data).some(x => x == '')) {
        return alert('All fields must be filled!')
    }
    await bookService.create({
        title:data.title,
        description:data.description,
        imageUrl:data.imageUrl,
        type:data.type
    })
    
    e.target.reset();
    ctx.page.redirect('/')
}