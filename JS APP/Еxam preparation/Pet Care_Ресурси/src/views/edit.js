import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"
import { submitHandler } from "../util.js";



const editTemp = (animal, onSubmit) => html`
        <section id="editPage">
            <form class="editForm" @submit=${onSubmit}>
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value=${animal.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value=${animal.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value=${animal.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value=${animal.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value=${animal.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`;


export async function editView(ctx) {
    let id = ctx.params.id
    let animal = await appService.details(id)
    ctx.render(editTemp(animal, submitHandler(ctx,onSubmit)))

}

async function onSubmit(ctx,data,e) {
    if(Object.values(data).some(x => x=='')) {
        return alert('All fields must be filled!')
    }
    let id = ctx.params.id

    await appService.edit(id,{
        name: data.name,
        breed: data.breed,
        age: data.age,
        weight: data.weight,
        image: data.image,
    });

    e.target.reset();
    ctx.page.redirect('/dashboard')
}