const express = require('express');

const data =[
    {
        id: 1111,
        name: 'First'
    },
    {
        id: 1112,
        name: 'Second'
    },
    {
        id: 1113,
        name: 'Third'
    },
]

const app = express();
app.use(express.json());

app.get('/catalog', (req,res) => {
    res.json(data)
});

app.get('/catalog/:id', (req,res) => {
    const id = req.params.id
    const item = data.find(i => i.id == id);

    if (item) {
        res.json(item)
    } else {
        res.status(404).json({error: 'Not found'});
    }
});

app.post('/catalog', (req,res) => {
    const item = req.body;
    item.id = 1000 + (Math.random() * 8999 | 0);
    data.push(item);

    res.status(201).json(item)
})

app.put('/catalog/:id', (req,res) => {
    const item = req.body;
    const id = req.params.id
    item.id =id;
    const index = data.findIndex(i => i.id == id);

    if (index != -1) {
        data.splice(index, 1)
        res.json(req.body)
    } else {
        res.status(404).json({error: 'Not found'});
    }
})

app.listen(3000, () => console.log('App is running on port 3000'))