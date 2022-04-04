import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as carService from '../api/cars.js'

const resultsCars = (car) => html`
                <div class="listing">
                    <div class="preview">
                        <img src="${car.imageUrl}">
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

const byYearTemp = (searchHandler, results) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${searchHandler}>Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">
                <!-- Display all records -->
                ${results
                ? results.length > 0 
                                ? results.map(car => resultsCars(car))
                                : html`<p class="no-cars"> No results.</p>`
                : null
                }

                <!-- Display if there are no matches -->
                
            </div>
        </section>
`;

export const byYearView = (ctx) => {

    async function searchHandler (e) {
        e.preventDefault()
        let searchInput = document.getElementById('search-input');
        
        try {
        if (!searchInput.value || isNaN(searchInput.value)) {
            return alert('Correct year is required!')
        }
        let results = await carService.searchCars(searchInput.value);
        console.log(results);
        ctx.render(byYearTemp(searchHandler, results))

        } catch(err) {
            alert(err.message)
        }
    }

    ctx.render(byYearTemp(searchHandler))
}
