import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as bookService from "../api/books.js"
import { submitHandler } from "../util.js";



const editTemp = (book, onSubmit) => html`
        <section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="PUT" @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" .value=${book.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description" .value=${book.description}></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${book.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" .value="Save">
                </fieldset>
            </form>
        </section>
`;


export async function editView(ctx) {
    let id = ctx.params.id
    let book = await bookService.getBookById(id)
    ctx.render(editTemp(book, submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {
    if(Object.values(data).some(x => x=='')) {
        return alert('All fields must be filled!')
    }
    let id = ctx.params.id

    await bookService.edit(id,{
        title:data.title,
        description:data.description,
        imageUrl:data.imageUrl,
        type:data.type,      
    });

    e.target.reset();
    ctx.page.redirect('/')
}