import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"

const logged = (data, user, onDelete, onDonate) => html`
                    <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                        ${data.isOwner 
                        ? html `
                        <a href="/edit/${data._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                        : nothing}

                        ${data.canLike 
                        ? html`
                        <a  @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
                        `
                        : nothing}
                    </div>
`;

const detailsTemp = (data, user, onDelete, onDonate) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${data.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${data.name}</h1>
                        <h3>Breed: ${data.breed}</h3>
                        <h4>Age: ${data.age}</h4>
                        <h4>Weight: ${data.weight}</h4>
                        <h4 class="donation">Donation: ${(data.donatesCounter * 100) || 0}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    ${user
                    ? logged(data,user, onDelete, onDonate)
                    : nothing}
                </div>
            </div>
        </section>
`;


export async function detailsView(ctx) {
    let id = ctx.params.id
    const data = await appService.details(id)

    let allDonates = await appService.allDonates(id);
    
    if (allDonates > 0) {
        data.donatesCounter = allDonates
    }


    if (ctx.user) {
        data.isOwner = data._ownerId == ctx.user._id
        let userDonation = await appService.userDonation(id, ctx.user._id)
        data.canLike = !data.isOwner && !userDonation
    }

    ctx.render(detailsTemp(data, ctx.user, onDelete, onDonate))

    async function onDelete() {
        let conf = confirm('Are you sure?!')
        if (conf) {
            await appService.del(id);
            ctx.page.redirect('/')
        }
    }

    async function onDonate(e) {
        e.currentTarget.style.display = 'none'
        await appService.clickDonate(id)
        ctx.page.redirect('/details/' + id)
    }
}