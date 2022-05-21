const fs = require('fs');

fs.readdir('.', (err,data) => {
    if (err) {
        return;
    }

    console.log(data);

})