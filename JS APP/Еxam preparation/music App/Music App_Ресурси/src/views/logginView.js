import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../authServices/authService.js"

const loginTemplate = (onSubmit) => html`
        <section id="loginPage">
            <form @submit = ${onSubmit}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`;

export const loginView = (ctx) => {

    const onSubmit = (e) => {
        e.preventDefault();
        let {email, password} = Object.fromEntries(new FormData(e.currentTarget));
        if (email == '' || password == '') {
            alert('Incorrect details')
            return
        }
        authService.login(email,password)
        .then(x => {
            if (x.code == 403) {
                alert(x.message)
                return
            }
            ctx.page.redirect('/')
        })
        .catch(err => {
            alert(err)
        })
    }
    ctx.render(loginTemplate(onSubmit))
}