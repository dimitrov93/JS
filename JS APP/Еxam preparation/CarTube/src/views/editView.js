import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"
import * as carService from '../api/cars.js'

const editTemp = (car, onSubmit) => html`
 <section id="edit-listing">
            <div class="container">

                <form id="edit-form" @submit=${onSubmit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`;

export async function editView(ctx){

    const carId = ctx.params.id
    const car = await carService.getCarById(carId)

    ctx.render( editTemp(car, submitHandler(ctx, onSubmit)) )
}

async function onSubmit(ctx,data,e) {
    const carId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are required!')
    };

    await carService.editCar(carId, {
        brand: data.brand,
        model: data.model,
        description: data.description,
        year: Number(data.year),
        imageUrl: data.imageUrl,
        price: Number(data.price)
    });

    e.target.reset();
    ctx.page.redirect('/all')
}