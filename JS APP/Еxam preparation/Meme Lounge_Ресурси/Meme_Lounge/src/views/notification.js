import {html, nothing} from "../../node_modules/lit-html/lit-html.js"


export const notificationTemp = (err) => html`
        <section id="notifications">
            <div id="errorBox" class="notification">
                <span>${err}</span>
            </div>
        </section>;`