import {html,render} from '../node_modules/lit-html/lit-html.js'
import { styleMap } from '../node_modules/lit-html/directives/style-map.js'
import {cats} from './catSeeder.js'
const root = document.getElementById('allCats');
root.addEventListener('click', toggle)

let template = (data) => html`
<ul>
    
        ${data.map(c => html`
        <li>
        <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">${c.info ? 'Hide' : 'Show'} status code</button>
                    <div class="status" style = ${styleMap(c.info ? {display:'block'} : {display:'none'})} id="${c.id}">
                        <h4>Status Code: ${c.statusCode}</h4>
                        <p>${c.statusMessage}</p>
                    </div>
                </div>
        </li>
        `)}        
</ul>
`;

cats.forEach(c => c.info = false);
update()

function update() {
    const result = template(cats);
    render(result,root)
}


function toggle(e) {
    const catId = e.target.parentNode.querySelector('.status').id;
    const cat = cats.find(c => c.id == catId)
    cat.info = !cat.info;
    update();
}