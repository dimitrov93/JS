import {html} from "../../node_modules/lit-html/lit-html.js";


const logged = (user) => html`
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/create">Create Event</a></li>
                    <li><a href="/logout">Logout</a></li>
`;

const guests = () => html`
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
`;

const navTemp = (user) => html`
            <nav>
                <a href="/">Theater</a>
                <ul>
                   ${user ? logged(user) : guests()}
                </ul>
            </nav>
`;


export const navView = (ctx) =>{
    return navTemp(ctx.user);
}