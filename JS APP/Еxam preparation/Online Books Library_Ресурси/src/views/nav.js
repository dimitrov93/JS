import {html, nothing} from "../../node_modules/lit-html/lit-html.js";

const logged = (user) => html`
                    <div id="user">
                        <span>Welcome, ${user.email}</span>
                        <a class="button" href="/myBooks">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>
`;

const guests = () => html`
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>
`;

const navTemp = (user) => html`
            <!-- Navigation -->
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                ${user ? logged(user) : guests()}

                </section>
            </nav>
`;


export function navView(ctx) {
    return navTemp(ctx.user)
}