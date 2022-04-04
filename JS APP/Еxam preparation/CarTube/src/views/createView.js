import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as carService from '../api/cars.js'

const createTemp = (onSubmit) => html`
          <section id="create-listing">
            <div class="container">
                <form id="create-form" @submit=${onSubmit}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`;

export const createView = (ctx) => {

    ctx.render( createTemp(submitHandler(ctx, onSubmit)) )
}

async function onSubmit(ctx,data,e) {
    if (Object.values(data).some(x => x == "")) {
        return alert('All fields are required!')
    }

    await carService.createCar({
        brand: data.brand,
        model: data.model,
        description: data.description,
        year: Number(data.year),
        imageUrl: data.imageUrl,
        price: Number(data.price)
    })

    e.target.reset();
    ctx.page.redirect('/all')

}