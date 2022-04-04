import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as userService from '../api/user.js'



const registerTemp = (onSubmit) => html`
        <section id="register-page" class="register">
            <form id="register-form" action="" method="POST" @submit=${onSubmit}>
                <fieldset>
                    <legend>Register Form</legend>
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
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;


export async function registerView(ctx) {

    ctx.render(registerTemp(submitHandler(ctx, onSubmit)))
}

async function onSubmit(ctx, data, e) {
    console.log(data);
    if (Object.values(data).some(x => x=='')) {
        return alert('All fields are required!')
    }

    if (data.password != data['confirm-pass']) {
        return alert('Passwords dont match!')
    }

    await userService.register(data.email,data.password);
    e.target.reset();
    ctx.page.redirect('/')
}