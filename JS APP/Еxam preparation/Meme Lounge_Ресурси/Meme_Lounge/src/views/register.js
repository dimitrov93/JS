import {html, nothing} from "../../node_modules/lit-html/lit-html.js"
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"

const registerTemp = (onSubmit) => html`
        <section id="register">
            <form id="register-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="#">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`;

export async function regView(ctx) {

    ctx.render(registerTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {
    if (Object.values(data).some(x => x=='')) {
        return alert('All fields must filled properly!')
    }

    if (data.password !== data.repeatPass) {
        return alert('Passwords dont match!')
    }

    await userService.register(data.username,data.email,data.password,data.gender)
    e.target.reset();
    ctx.page.redirect('/all')

}