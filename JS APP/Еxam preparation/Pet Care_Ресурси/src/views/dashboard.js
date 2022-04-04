import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from '../api/appService.js'

const cardTemp = (data) => html`
 <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${data.image}>
                    </article>
                    <h2 class="name">${data.name}</h2>
                    <h3 class="breed">${data.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${data._id}">Details</a>
                    </div>
                </div>
`;

const dashboardTemp = (data) => html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
               
                ${data.length > 0 
                ? data.map(x => cardTemp(x) )
                : html`
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`}
                
            </div>
        </section>
`;


export async function dashboardView(ctx) {

    let data = await appService.getAll();

    ctx.render(dashboardTemp(data))
}
