const http = require('http');
const port = 5000;

const server = http.createServer((req,res) => {
    // console.log(`Method: `, req.method);
    // console.log(`URL: `, req.url);
    // console.log(`Headers: `, req.headers);

    res.writeHead(200, {
        'Content-Type': "text/plain"
    });

    if (req.url == '/cats') {
        res.write('Some cats');
    } else if (req.url == '/dogs') {
        res.write('<h1>Some dogs<h1>');
    } else {
        res.write('Hello from NodeJS!');
    }

    res.end();
});

server.listen(port, () => console.log(`Server is listening on port ${port}...`))