import { html, render } from "../node_modules/lit-html/lit-html.js"
import * as authServices from "../src/services/authServices.js";

const createTemplate = (createTeamForm) => html`
            <section id="create">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>New Team</h1>
                    </header>
                    <form id="create-form" class="main-form pad-large" @submit=${createTeamForm}>
                        <div class="error"></div>
                        <label>Team name: <input type="text" name="name"></label>
                        <label>Logo URL: <input type="text" name="logoUrl"></label>
                        <label>Description: <textarea name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Create Team">
                    </form>
                </article>
            </section>
`;

export const createView = (ctx) => {

    function createTeamForm(e) {
        e.preventDefault();

        let {name, logoUrl, description} = Object.fromEntries(new FormData(e.currentTarget));
        if (name == '' || logoUrl == '' || description.length < 10) {
            document.querySelector('.error').textContent = 'Error message'
            return
        }

        authServices.createTeam(name,logoUrl,description)
        .then(data => console.log(data))
    }

    ctx.render(createTemplate(createTeamForm))
}