const express = require('express');
const app = express();

app.get('/data/catalog', (req,res) => {
    res.json([])
});

app.listen(3030, () => console.log('REST service is running on port 3000'))