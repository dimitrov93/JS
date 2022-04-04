import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import {submitHandler} from "../util.js";
import * as userService from "../api/user.js"

const loginTemp = (onSubmit) => html`
        <section id="login-page" class="login">
            <form id="login-form" action="" method="POST" @submit=${onSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>
`;


export function loginView(ctx) {
    
    ctx.render(loginTemp(submitHandler(ctx, onSubmit)))
}

async function onSubmit(ctx, data, e) {
    await userService.login(data.email,data.password);
    e.target.reset();
    ctx.page.redirect('/')
}