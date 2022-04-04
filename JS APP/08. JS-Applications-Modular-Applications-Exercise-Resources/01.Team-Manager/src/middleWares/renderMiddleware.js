import { render } from "../../node_modules/lit-html/lit-html.js";
import { navView } from "../../views/navView.js";

const content = document.querySelector('#content');


export const renderMiddlewareNav = (ctx, next) => {

    render(navView(ctx), content)
    next();
}


export const renderMiddlewareMain = (ctx, next) => {
    ctx.render  = (templateResult) => {
        render(templateResult, root)
    };
    next()
}

