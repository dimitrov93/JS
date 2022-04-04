import { html, render } from "../node_modules/lit-html/lit-html.js";
import { authMiddleware } from "../src/middleWares/authMiddleware.js";


const guestTemplate =  html`
        <a href="/browseteams" class="action">Browse Teams</a>
        <a href="/login" class="action">Login</a>
        <a href="/register" class="action">Register</a>
`;

const loggedTemplate =  html`
        <a href="/browseteams" class="action">Browse Teams</a>
        <a href="/myteams" class="action">My Teams</a>
        <a href="/logout" class="action">Logout</a>
`;

const navTemplate = (user) => html`
        <header id="titlebar" class="layout">
            <a href="/" class="site-logo">Team Manager</a>
            <nav>
                ${user
                    ? loggedTemplate
                    : guestTemplate
                }
            </nav>
        </header>
        <main id="root"> </main>
`
export const navView = (ctx) => {
    return navTemplate(ctx.user.username);
}