import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"
import { submitHandler } from "../util.js";

const logged = (data) => html`
                  <div class="actionBtn">
                        <a href="/edit/${data._id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" class="remove">Delete</a>
                    </div>
`;

const editTemp = (data, onSubmit) => html`
        <section class="editPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" .value=${data.name}>

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${data.imgUrl}>

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" .value=${data.price}>

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${data.releaseDate}>

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" .value=${data.artist}>

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" .value=${data.genre}>

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10"
                            cols="10" .value=${data.description}></textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;


export async function editView(ctx) {
    const data = await appService.details(ctx.params.id);

    async function onSubmit(ctx,data,e) {
        if (Object.values(data).some(x => x=='')) {
            return alert("All fields required!")
        }

        await appService.edit(ctx.params.id, {
            name: data.name,
            imgUrl: data.imgUrl,
            price: data.price,
            releaseDate: data.releaseDate,
            artist: data.artist,
            genre: data.genre,
            description: data.description       
        })

        e.target.reset();
        ctx.page.redirect('/catalog')
    }

    ctx.render(editTemp(data, submitHandler(ctx,onSubmit)))

}