import {html} from "../../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"


const loginTemp = (onSubmit) => html`
        <section id="loginPage">
            <form class="loginForm" @submit=${onSubmit}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>
`;


export async function loginView(ctx){
    ctx.render(loginTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {
    if (Object.values(data).some(x => x=='')) {
        return alert('All fields are required!')
    }
    await userService.login(data.email, data.password)
    e.target.reset();
    ctx.page.redirect('/')
}