import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';

const root = document.querySelector('#root');
const ctxRender = (ctx, templateResult) => {
    let layout = html`
        <nav>
            ${navigationTemplate(ctx)}
        </nav>
        <main>
            ${templateResult}
        </main>
    `;
    
    render(layout, root)
};

export const renderMiddleware = (ctx, next) => {
    ctx.render = ctxRender.bind(null, ctx);

    // document.querySelector('#root').prepend(navigationView(ctx))

    next();
}