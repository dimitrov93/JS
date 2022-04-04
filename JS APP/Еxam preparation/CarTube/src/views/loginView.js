import {html} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"

const loginTemp = (onSubmit) => html`
        <section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit = ${onSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="#">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export const loginView = (ctx) => {

    ctx.render(loginTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {
    await userService.login(data.username, data.password);
    e.target.reset();
    ctx.page.redirect('/')
    
}