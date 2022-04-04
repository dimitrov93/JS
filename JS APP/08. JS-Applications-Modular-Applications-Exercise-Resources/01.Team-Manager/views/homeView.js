import { html } from "../node_modules/lit-html/lit-html.js"

const loggedUserTemplate = html`
    <a href="/browseteams" class="action cta">Browse Teams</a>
`;

const guestUserTemplate = html`
    <a href="/register" class="action cta">Sign Up Now</a>
`

const homeTemplate = (user) => html`
            <section id="home">
                <article class="hero layout">
                    <img src="./assets/team.png" class="left-col pad-med">
                    <div class="pad-med tm-hero-col">
                        <h2>Welcome to Team Manager!</h2>
                        <p>Want to organize your peers? Create and manage a team for free.</p>
                        <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                        ${user
                        ? loggedUserTemplate
                        : guestUserTemplate
                        }
                    </div>
                </article>
            </section>
`;

export const homeView = (ctx) => {
    ctx.render(homeTemplate(ctx.user.username));
};

