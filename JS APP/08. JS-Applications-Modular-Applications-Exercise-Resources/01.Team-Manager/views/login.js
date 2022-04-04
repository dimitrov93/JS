import { html} from "../node_modules/lit-html/lit-html.js";
import * as authService from "../src/services/authServices.js"

const loginTemplate = (loginHandler) => html`
            <section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form id="login-form" class="main-form pad-large" @submit=${loginHandler}>
                        <div class="error" ></div>
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In">
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="#" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>
`;

export const loginView = (ctx) => {

    const loginHandler = (e) => {
        e.preventDefault();

        let {email, password} = Object.fromEntries(new FormData(e.currentTarget))

        authService.login(email, password)
        .then(user => {
            if (user) {
                ctx.page.redirect('/myteams');
                console.log('User is logged in');
            } else { 
                document.querySelector('.error').textContent = 'Error message'
            }
        });
    }
    ctx.render(loginTemplate(loginHandler))
}