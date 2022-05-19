const http = require('http');

const homePage = require('./views/home.js');
const addCat = require('./views/addCat.js');
const siteCss = require('./styles/site.js')
const cats = require('./views/cats.json')

const catTemplate = (cat) => `
<li>
<img src="${cat.imageUrl}" alt="Black Cat">
<h3>${cat.name}</h3>
<p><span>Breed: </span>${cat.Breed}</p>
<p><span>Description: </span>${cat.Description}</p>
<ul class="buttons">
    <li class="btn edit"><a href="">Change Info</a></li>
    <li class="btn delete"><a href="">New Home</a></li>
</ul>
</li>`;

const server = http.createServer((req,res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.write(siteCss)
    } else if (req.url == '/cats/add-cat') {
        res.write(addCat);
    } else { 
        const homePageResult = homePage.replace('{{cats}}', cats.map(x => catTemplate(x)).join(''))
        res.write(homePageResult);
    }



    res.end();
});

server.listen(5000, () => console.log("Server listening on port 5000"))