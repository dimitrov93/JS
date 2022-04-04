import {html, render} from "../../node_modules/lit-html/lit-html.js"
import { navView } from "../views/nav.js";

const header = document.querySelector('#header-content');
const content = document.querySelector('#site-content');

export const renderNav = (ctx,next) => {
    render(navView(ctx), header);
    next();
};


const ctxRender = (template) => {
    render(template, content)
}


export const renderMain = (ctx,next) => {
    ctx.render = ctxRender;
    next();
};
