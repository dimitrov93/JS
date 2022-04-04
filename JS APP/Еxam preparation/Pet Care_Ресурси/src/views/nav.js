import {html} from "../../node_modules/lit-html/lit-html.js"

const guests = () => html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
`;

const logged = () => html`
              <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
`;

const navTemp = (user) => html`
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                ${user ? logged() : guests() }
  
            </ul>
        </nav>
`;


export const navView = (ctx) => {
    return navTemp(ctx.user);
}