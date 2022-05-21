const fs = require('fs/promises');


fs.unlink('./file-system/delete.txt')
    .then(() => {
        console.log('delete finished');
    });