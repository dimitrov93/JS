import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../authServices/authService.js"

const regTempalte = (registration) => html`
                  <section id="registerPage">
            <form @submit = ${registration}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>`;


export const regView = (ctx) => {

    const registration = (e) => {
        e.preventDefault();
        let {email, password, ['conf-pass']:rePass} = Object.fromEntries(new FormData(e.currentTarget))
        if (email == '') {
            alert('Email field must be filled!')
            return;
        }

        if (password !== rePass) {
            alert('Passwords dont match')
            return;
        }
        authService.register(email, password)
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

    ctx.render(regTempalte(registration))
}