import { html } from "../../node_modules/lit-html/lit-html.js"
import * as apiService from "../api/api.js";
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"

const loginTemplate = (onSubmit) => html`
                <section id="login-page" class="auth">
            <form id="login" @submit = ${onSubmit}>

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>`;

export const loginView = (ctx) => {

    async function onSubmit(ctx, data,e) {
        await userService.login(data.email, data.password);
        e.target.reset();
        ctx.page.redirect('/')
    }

    ctx.render(loginTemplate(submitHandler(ctx,onSubmit)))
}

