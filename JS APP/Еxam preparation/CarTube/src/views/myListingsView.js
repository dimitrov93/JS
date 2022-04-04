import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as carService from '../api/cars.js'

const carTemp = (car) => html`
                <div class="listing">
                    <div class="preview">
                        <img src=${car.imageUrl}>
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
`;

const myListingTemp = (cars) => html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">

               ${cars.length > 0
                ? cars.map(car => carTemp(car))
                : html`<p class="no-cars"> You haven't listed any cars yet.</p>`
                }
                
            </div>
        </section>
`

export async function myListingsView(ctx) {
    const userId = ctx.user._id
    let cars = await carService.getMyCars(userId);
    ctx.render(myListingTemp(cars))
}