const express = require("express");
const fs = require('fs')
const app = express();

const people = [];

app.get("/", (req,res) => {
    // res.write('Hello World');
    // res.end();
    res.send("Hello World!!!");
});


app.get('/people', (req,res) => {
    if (people.length > 0) {
        res.send(people.join(', '));
    } else { 
        res.send('No people here')
    }
});

app.get('/people/:personId(\\d+)', (req,res) => {
    let id = Number(req.params.personId);
    res.send(people[id])
})

app.post('/people/:personName', (req,res) => {
    people.push(req.params.personName);
    res.status(201)
    res.send(`Add ${req.params.personName} to the collection`)
});


app.put('/people', (req,res) => {
    res.send('Modify existing person')
});

app.get('/people*', (req,res) => {
    // could be /peopleblqlblqblq
    res.send('Route staring with with people')
});

app.get(/[0-9]+/, (req,res) => {
    res.send('Only numbers route')
})



app.get('/download', (req,res) => {
    res.writeHead(200, {
        // 'content-disposition': 'attachment; fileName="sample.pdf"'
        'content-type':"application/pdf",
        'content-disposition': "inline"
    });

    const readStream = fs.createReadStream('sample.pdf');
    readStream.pipe(res)
    // readStream.on('data', (data) => {
    //     res.write(data)
    // });

    // readStream.on('end', () => {
    //     res.end();
    // })
});

app.get('/express-download', (req,res) => {
    res.download('sample.pdf');
    
});

app.get('/redirect', (req,res) => {
    res.writeHead(302, {
        'Location': '/people'
    });

    res.end();
}); 

app.get('/express-redirect', (req,res) => {
    res.redirect('/people');
});

app.all('*', (req,res) => {
    res.status(404);
    res.send('Canot find this page ------')
});

app.listen(5000, () => console.log("Server is listening on port 5000..."));