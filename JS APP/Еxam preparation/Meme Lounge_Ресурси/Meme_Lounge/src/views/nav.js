import {html, nothing} from "../../node_modules/lit-html/lit-html.js"

const logged = (user) => html`
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${user.email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>
`;

const guests = () => html`
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/">Home Page</a>
            </div>
`;

const navTemp = (user) => html`
            <a href="/all">All Memes</a>
            ${user ? logged(user) : guests() }
`;


export const navView = (ctx) => {
    return navTemp(ctx.user);
}