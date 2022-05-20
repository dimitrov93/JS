const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./steams/largeFile.js', {encoding: 'utf-8', highWaterMark: 1000});
// const readStream = fs.createReadStream('./steams/largeFile.js', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./steams/copyFile2.txt', {encoding: 'utf-8'});

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// });

// readStream.on('end', () => {
//     writeStream.end();
//     console.log('finished');
// });

writeStream.on('finish', () => console.log('file is saved'));

// readStream.pipe(writeStream)

readStream.pipe(gzip).pipe(writeStream);

