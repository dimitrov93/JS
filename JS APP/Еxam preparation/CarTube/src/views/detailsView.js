import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"
import * as carService from '../api/cars.js'


const logged = (car, onDelete) => html`
                <div class="listings-buttons">
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a @click = ${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
                </div>
`

const detailsTemp = (car, onDelete) => html`
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${car.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">${car.description}</p>

                ${car.isOwner
                ?  logged(car, onDelete)
                : nothing
                }

            </div>
        </section>
`;

export async function detailsView(ctx) {
    let carId = ctx.params.id
    const car = await carService.getCarById(carId)

    if (ctx.user) {
        car.isOwner = car._ownerId == ctx.user._id
    }

    async function onDelete() {
        let conf = confirm('Are you sure?');
        if (conf) {
            await carService.deleteCar(carId);
            ctx.page.redirect("/all")
        }
    }

    ctx.render( detailsTemp(car, onDelete) )
}
