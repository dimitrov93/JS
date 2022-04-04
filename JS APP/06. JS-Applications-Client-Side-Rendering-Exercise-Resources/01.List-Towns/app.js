import {html,render} from '../node_modules/lit-html/lit-html.js'


document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const template = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>
`


function getTowns(e) {
    e.preventDefault();

    if (document.getElementById('towns').value !== '') {
        const root = document.getElementById('root');
        const towns = (document.getElementById('towns').value).split(',')


        const result = template(towns);
        render(result, root);

        document.getElementById('towns').value = ''
    }
    

}
