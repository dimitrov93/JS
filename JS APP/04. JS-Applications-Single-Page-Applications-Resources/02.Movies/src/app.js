import { createPage } from "./create.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { logoutPage } from "./logout.js";
import { registerPage } from "./register.js";
import { showView } from "./util.js";

// showView('#home-page')

const routes = {
    '/':homePage,
    '/login': loginPage,
    '/logout': logoutPage,
    '/register': registerPage,
    '/create': createPage,
};


document.querySelector('nav').addEventListener('click', onNavigate)
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate)


function onNavigate(e) {
    if (e.target.tagName =="A" && e.target.href) {
        e.preventDefault();
        const href = new URL(e.target.href)
        const view = routes[href.pathname];
        if (typeof view == 'function') {
            view();
        }
    }
}






homePage();