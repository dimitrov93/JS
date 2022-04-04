import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import * as appService from "../api/appService.js"

const cardTemp = (results) => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${results.title}</p>
                            <img class="meme-image" alt="meme-img" src=${results.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${results._id}">Details</a>
                        </div>
                    </div>
                </div>
`

const allTemp = (results) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				${results.length > 0
                    ? results.map(res => cardTemp(res))
                    : html`<p class="no-memes">No memes in database.</p>`
                    }
			</div>
        </section>
`;

export async function allView(ctx) {

    const results = await appService.getAll()
    ctx.render(allTemp(results))
}