import {html, render} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"

const cardTemp = (x) => html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src=${x.imageUrl}>
                        <h2>${x.title}</h2>
                        <h6>${x.date}</h6>
                        <a href="/details/${x._id}" class="details-button">Details</a>
                    </div>
                </div>
`

const profileTemp = (data, user) => html`
            <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                <!--If there are event-->
                ${data.length > 0
                ? data.map(x => cardTemp(x))
                : html`<div class="no-events">
                    <p>This user has no events yet!</p>
                </div>`
                }                
            </div>
        </section>
`;


export async function profileView(ctx) {
    let userId = ctx.user._id
    let data = await appService.getMine(userId);
    ctx.render(profileTemp(data, ctx.user))
}