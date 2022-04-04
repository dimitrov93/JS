import { html, render } from "../node_modules/lit-html/lit-html.js";
import * as authService from "../src/services/authServices.js";


const regView = (registerHandler) => html`
            <section id="register">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Register</h1>
                    </header>
                    <form id="register-form" class="main-form pad-large" @submit =${registerHandler}>
                        <div class="error"></div>
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Username: <input type="text" name="username"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <label>Repeat: <input type="password" name="repass"></label>
                        <input class="action cta" type="submit" value="Create Account">
                    </form>
                    <footer class="pad-small">Already have an account? <a href="#" class="invert">Sign in here</a>
                    </footer>
                </article>
            </section>
`;

export const registerView = (ctx) => {

    const registerHandler = (e) => {
        e.preventDefault();
        let { email, password, username } = Object.fromEntries(new FormData(e.currentTarget));

        if (email == '' || password.length < 3 || username.length < 3) {
            document.querySelector('.error').textContent = 'Error message'
            return
        }

        authService.register(email, password, username)
            .then(user => {
                console.log(user);
                ctx.page.redirect('/');
                console.log('User is registered');
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    ctx.render(regView(registerHandler))
}