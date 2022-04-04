import { html, nothing, render } from "../node_modules/lit-html/lit-html.js"
import  * as displayteams  from "../src/services/teamsService.js";

const loggedUserTemp = html`
<article class="layout narrow">
    <div class="pad-small"><a href="/createTeam" class="action cta">Create Team</a></div>
</article>
`

const layoutTemplete = (team) => html`
            <article class="layout">
                <img src=${team.logoUrl} class="team-logo left-col">
                <div class="tm-preview">
                    <h2>${team.name}</h2>
                    <p>${team.description}</p>
                    <span class="details">5000 Members</span>
                    <div><a href="#" class="action">See details</a></div>
                </div>
            </article>`

const browseTeamsTemplate = (user, teams) => html`
            <section id="browse">

            <article class="pad-med">
                <h1>Team Browser</h1>
            </article>

            ${user
            ? loggedUserTemp
            : nothing
            },
            
            ${teams.map(x => layoutTemplete(x))}


            </section>`;

export const browseTeamsView = async (ctx) => {
    displayteams.getAll()
    .then(teams => {
        ctx.render(browseTeamsTemplate(ctx.user.username, teams))
    })

}