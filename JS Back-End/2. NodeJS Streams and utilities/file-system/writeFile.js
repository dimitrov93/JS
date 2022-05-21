const fs = require('fs/promises');


const data = 'Culpa et id ex adipisicing consequat eiusmod sunt. Ipsum aliquip ex fugiat do quis sint exercitation ea aliqua quis sit dolor fugiat. Dolore magna non laboris adipisicing nostrud eu duis et. Eu excepteur consectetur do tempor aliquip. Amet qui Lorem ea ullamco dolor est adipisicing voluptate eiusmod. Duis sunt magna ad aliquip labore do id fugiat. Aliquip adipisicing occaecat aliqua quis occaecat amet non do commodo dolor in sit et cillum.';

fs.writeFile('./file-system/text1.txt', data, {encoding:'utf-8'})
    .then(() => {
        console.log('Finished');
    })
    .catch((err) => {
        console.log(err);
    });
    