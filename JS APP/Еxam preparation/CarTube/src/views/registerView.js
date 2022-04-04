import {html} from "../../node_modules/lit-html/lit-html.js";
import { submitHandler } from "../util.js";
import * as userService from "../api/user.js"

const regTemp = (onSubmit) => html`
<section id="register">
            <div class="container">
                <form id="register-form" @submit = ${onSubmit}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="#">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export const registerView = (ctx) => {

    ctx.render(regTemp(submitHandler(ctx,onSubmit)))
}

async function onSubmit(ctx,data,e) {

    if (data.username == '') {
        return alert('Username is required!')
    }

    if (data.password == '' || data.repeatPass == '') {
        return alert('Password/Repassword is required!')
    }

    if (data.password != data.repeatPass) {
        return alert('Passwords dont match!')
    }

    await userService.register(data.username, data.password);
    e.target.reset();
    ctx.page.redirect('/all')
    
}