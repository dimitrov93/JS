import { render } from "../../node_modules/lit-html/lit-html.js";
import { navView } from "../views/navView.js";

const header = document.querySelector('#header-nav');
const main = document.querySelector('#main-content');

export const renderNavMiddleware = (ctx, next) => {

    render(navView(ctx), header);
    next();
}

const ctxRender = (template) => {
    render(template,main);
}

export const renderMainMiddleware = (ctx,next) => {
    ctx.render = ctxRender;
    next();
}