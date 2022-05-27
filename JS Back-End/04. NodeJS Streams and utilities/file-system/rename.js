const fs = require('fs/promises');

fs.rename('./test', './testNew')
    .then(() => {
        console.log('finished renaming');
    });