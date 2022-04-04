async function solution() {

    let main = document.getElementById('main');

    let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    let res = await fetch(url)
    let data = await res.json();

    data.forEach(x => {
        let divAccordion = createElement('div','',['class','accordion']);
        let divHead = createElement('div','',['class','head']);
        let span = createElement('span',x.title)
        let button = createElement('button','More',['class','button','id',x._id]);
        let divExtra = createElement('div','',['class','extra'])
        let p = createElement('p');

        button.addEventListener('click', toggle)

        divExtra.appendChild(p)
        divAccordion.appendChild(divExtra)
        divHead.appendChild(span)
        divHead.appendChild(button)
        divAccordion.appendChild(divHead)
        main.appendChild(divAccordion)
    });

    async function toggle(e) {
        let accordion = e.target.parentNode.parentNode;
        let p = e.target.parentNode.parentNode.children[0].children[0];
        let extra = e.target.parentNode.parentNode.children[0];
    let id = e.target.id
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    let resp = await fetch(url);
    let data = await resp.json()
        
        
    p.textContent = data.content;
    let hidden = e.target.textContent === 'More';

    extra.style.display = hidden ? 'block' : 'none';
    e.target.textContent = hidden ? 'Less' : 'More';
    }

    function createElement(type, content, attributes = []) {
        let el  = document.createElement(type);
        if (content) {
            el.textContent = content;
        }

        if (attributes.length > 0 ) {
            for (let i = 0; i < attributes.length; i+=2) {
                el.setAttribute(attributes[i], attributes[i+1])
            
            }
        }
        return el
    }

}

solution()