const express = require('express');
const fs = require('fs');
const path = require('path');
const handlebars = require('express-handlebars');
const { catMiddleware } = require('./middlewares');

const users = [
    { name: 'Pesho', age: 20},
    { name: 'Gosho', age: 21},
    { name: 'Penka', age: 19},
];

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.use('/static', express.static('public'));

app.use(catMiddleware);

app.get('/:name?', (req, res) => {
    // res.write('Hello world!');
    // res.write('Hello world!');
    // res.end();
    // res.send('Hello World!');
    
    res.render('home', {
        name: req.params.name || 'Guest',
        users,
        isAuth: true,
        danger: '<script>alert("you are hacked!")</script>'
    });
});

// app.get('/img/:imgName', (req, res) => {
//     res.sendFile(path.resolve('./public/img', req.params.imgName));  
// });

app.get('/cats', (req, res) => {
    if (req.cats.length > 0) {
        res.send(req.cats.join(', '));
    } else {
        res.send('No cats here!');
    }
});

app.get('/cats/:catId(\\d+)', (req, res) => {
    let catId = Number(req.params.catId);

    // res.send(cats[catId]);
    res.render('cats', {
        catName: req.cats[catId],
    })
});

// app.get('/cats/:catName', (req, res) => {
//     // TODO: ...
// });


app.post('/cats/:catName', (req, res) => {
    req.cats.push(req.params.catName);

    res.status(201);
    res.send(`Add ${req.params.catName} to the collection`);
});

app.put('/cats', (req, res) => {
    // TODO: implement
    res.send('Modify existing cat');
});

// Default way
app.get('/download', (req, res) => {
    res.writeHead(200, {
        // 'content-disposition': 'attachment; fileName="sample.pdf"'
        'content-type': 'application/pdf',
        'content-disposition': 'inline'
    });

    const readStream = fs.createReadStream('sample.pdf');

    readStream.pipe(res);
    // readStream.on('data', (data) => {
    //     res.write(data);
    // });

    // readStream.on('end', () => {
    //     res.end();
    // });
});

app.get('/express-download', (req, res) => {
    res.download('sample.pdf');
});

app.get('/redirect', (req, res) => {
    res.writeHead(302, {
        'Location': '/cats'
    });

    res.end();
});

app.get('/express-redirect', (req, res) => {
    res.redirect('/cats');
});

app.get(/[0-9]+/, (req, res) => {
    res.send('Only number route');
});

app.get('/cat*', (req, res) => {
    res.send('Route starting with cat');
});

app.all('*', (req, res) => {
    res.status(404);
    res.send('Cannot find thid page');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
