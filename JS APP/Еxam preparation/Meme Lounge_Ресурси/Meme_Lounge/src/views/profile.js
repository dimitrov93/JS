import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import * as appService from "../api/appService.js"

let cardTemp = (result) => html`
             <div class="user-meme">
                    <p class="user-meme-title">${result.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${result.imageUrl}>
                    <a class="button" href="/details/${result._id}">Details</a>
                </div>
`;

const profileTemp = (user, results) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${results.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${results.length > 0 ? results.map(res => cardTemp(res)) : html`<p class="no-memes">No memes in database.</p>`}
            </div>
        </section>
`;

export async function profiteView(ctx) {
    let results = await appService.getMine(ctx.user._id);
    ctx.render(profileTemp(ctx.user, results))
}