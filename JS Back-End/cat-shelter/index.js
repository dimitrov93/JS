const http = require('http');
const fs = require('fs/promises');
const querystring = require('querystring');
const {renderHome} = require('./renderHome.js')


const addBreed = require('./views/addBreed.js');



const server = http.createServer(async (req,res) => {

    let [pathname, qs] = req.url.split('?');
    let params = querystring.parse(qs)

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url == '/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        let siteCss = await fs.readFile('./styles/site.js')
        res.write(siteCss)

    } else if (req.url == '/cats/add-cat') {
        let addCatHtml = await fs.readFile('views/addCat.html', 'utf-8')
        res.write(addCatHtml);

    } else if (req.url == '/cats/add-breed' && req.method === "GET") {
        res.write(addBreed);

    } else { 
        let homePage = await renderHome(params.name);
        res.write(homePage);
    }
    res.end();
});


server.listen(5000, () => console.log("Server listening on port 5000"))