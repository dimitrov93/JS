import {html, nothing} from "../../node_modules/lit-html/lit-html.js";
import * as appService from "../api/appService.js"

const cardTemp = (x) => html`
          <div class="eventsInfo">
                        <div class="home-image">
                            <img src=${x.imageUrl}>
                        </div>
                        <div class="info">
                            <h4 class="title">${x.title}</h4>
                            <h6 class="date">${x.date}</h6>
                            <h6 class="author">${x.author}</h6>
                           <div class="info-buttons">
                                <a class="btn-details" href="/details/${x._id}">Details</a>
                            </div>
                    
                        </div>
                    </div>
`

const homeTemp = (data) => html`
        <section class="welcomePage">
            <div id="welcomeMessage">
                <h1>My Theater</h1>
                <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
                    professionals, theatre organizations, theatre universities and theatre lovers all over the world on
                    the 27th of March. This day is a celebration for those who can see the value and importance of the
                    art
                    form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
                    not
                    yet recognised its value to the people and to the individual and have not yet realised its potential
                    for
                    economic growth.</p>
            </div>
            <div id="events">
                <h1>Future Events</h1>
                <div class="theaters-container">


                    ${data.length > 0 
                    ? data.map(x => cardTemp(x))
                    : html`       <h4 class="no-event">No Events Yet...</h4>`
                    }

                </div>
            </div>
        </section>
`;


export async function homeView(ctx) {
    const data = await appService.getAll()
    ctx.render(homeTemp(data))
}