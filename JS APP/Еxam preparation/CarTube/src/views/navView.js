import {html} from "../../node_modules/lit-html/lit-html.js";

const logged = (user) => html`
                <div id="profile">
                    <a>Welcome ${user.username}</a>
                    <a href="/listings">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                </div>
`;

const guests = html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
`;


const navTemp = (user) => html`
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/all">All Listings</a>
                <a href="/byYear">By Year</a>
                <!-- Guest users -->
                ${user ? logged(user) : guests}
                <!-- Logged users -->
            </nav>
`;


export const navView = (ctx) => {
    return navTemp(ctx.user);
}