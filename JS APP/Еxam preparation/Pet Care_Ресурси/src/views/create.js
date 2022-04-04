import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from '../api/appService.js'
import { submitHandler } from "../util.js";



const createTemp = (onSubmit) => html`
        <section id="createPage">
            <form class="createForm" @submit=${onSubmit}>
                <img src="./images/cat-create.jpg">
                <div>
                    <h2>Create PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" placeholder="Max">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" placeholder="2 years">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" placeholder="5kg">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                    </div>
                    <button class="btn" type="submit">Create Pet</button>
                </div>
            </form>
        </section>
`;


export async function createView(ctx) {

    ctx.render(createTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {

    if(Object.values(data).some(x => x == '')) {
        return alert('All fields must be filled!')
    }
    await appService.create({
        name:data.name,
        breed:data.breed,
        age:data.age,
        weight:data.weight,
        image:data.image
    })
    
    e.target.reset();
    ctx.page.redirect('/')
}