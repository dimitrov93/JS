import {html, render} from "../../node_modules/lit-html/lit-html.js";
import * as userService from "../api/user.js"
import {submitHandler} from "../util.js";

const registerTemp = (onSubmit) => html`
         <section id="registerPage">
            <form class="registerForm" @submit=${onSubmit}>
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>
`;


export async function registerView(ctx) {

    async function onSubmit(ctx,data,e) {
        if (Object.values(data).some(x => x=='')) {
            return alert('All fields are required!')
        }

        if (data.password !== data.repeatPassword) {
            return alert('Passwords dont match...')
        }
        
        await userService.register(data.email, data.password);
        e.target.reset();
        ctx.page.redirect('/')
    }

    ctx.render( registerTemp(submitHandler(ctx,onSubmit)) )
}