import { render } from "../../node_modules/lit-html/lit-html.js";
import { navView } from "../views/navigationView.js";

const header = document.querySelector('.header');
const main = document.querySelector('#main-content')

const ctxRender = (templateResult) => {
    render(templateResult,main)
}
export const renderNavMiddleware = (ctx, next) => {

    render(navView(ctx), header)
    next()
}

export const renderContentMiddleware = (ctx, next) => {

    ctx.render = ctxRender;
    next()
}