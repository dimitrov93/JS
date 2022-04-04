import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"
import { notificationTemp } from "./notification.js";


const loginTemp = (onSubmit, error) => html`
        <section id="login">
            <form id="login-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="#">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
    ${error ? notificationTemp(error) : nothing}
`;

export async function loginView(ctx) {

    ctx.render(loginTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {

    try {
        // if (Object.values(data).some(x => x=='')) {
        //     return alert('All fields must be filled!')
        // }
        await userService.login(data.email,data.password);
        e.target.reset();
        ctx.page.redirect('/all')
    } catch (err) {
        ctx.render(loginTemp(submitHandler(ctx,onSubmit),err.message))
        document.querySelector("div.notification ").style.display="block"
    }

    setTimeout(function(){
        ctx.render(loginTemp(submitHandler(ctx,onSubmit)))

      },3000);

}


