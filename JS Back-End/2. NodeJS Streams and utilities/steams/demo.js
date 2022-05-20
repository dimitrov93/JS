const fs = require('fs');


// const readStream = fs.createReadStream('./steams/largeFile.js', {encoding: 'utf-8', highWaterMark: 1000});
const readStream = fs.createReadStream('./steams/largeFile.js', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./steams/copyFile.txt', {encoding: 'utf-8'});

readStream.on('data', (chunk) => {
    console.log(chunk);
    console.log('---------------------');
});

readStream.on('end', () => {
    console.log('finished');
});

writeStream.on('finish', () => console.log('file is saved'))

writeStream.write('Hello world 1')
writeStream.write('Hello world 2')
writeStream.write('\n')
writeStream.write('Hello world 3')
writeStream.end();