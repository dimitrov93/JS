import {html} from "../../node_modules/lit-html/lit-html.js"
import * as userService from '../api/user.js';

const logged =  html`
                <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/myGames">My Games</a>
                    <a href="/logout">Logout</a>
                </div>
`;

const guests =  html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
`;

const navTemplate = (user) => html`
            <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                <a href="/search">Search</a>
                ${user 
                ? logged
                : guests
                }

            </nav>`;

export const navView = (ctx) => {
    return navTemplate(ctx.user)
}
