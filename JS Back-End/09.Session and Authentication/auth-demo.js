const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'myPassword';
const hashedPassword = '$2b$10$8q0oUnJ15qohViELstN/ye.xNY2npOFt4hrEHpJv/huQHhSwvXbxG'
const secret = 'MySupersecretSecret';

// const password2 = 'not_bacon';


app.get('/hash/:password?', async function(req, res) {
    const salt = await bcrypt.genSalt(saltRounds)

    const hash = await bcrypt.hash(req.params.password, salt)
    console.log("salt:", salt);
    console.log("hash:", hash);
    res.send(hash);
});

app.get('/login/:password?', async function(req, res) {
    const isValidPassword = await bcrypt.compare(req.params.password, hashedPassword)

    if (isValidPassword) {
        const payload = {username: 'Pesho'};
        const options = {expiresIn: '2d' };
        const token = jwt.sign(payload, secret, options)
        res.send(token)

    } else {
        res.send('Invalid Password')
    }
});

app.get('/verify/:token', (req,res) => {
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlBlc2hvIiwiaWF0IjoxNjU0NjgzMTg2LCJleHAiOjE2NTQ4NTU5ODZ9.BIfU__9nnHRaw-RV_gCVVLh6uCbO-sWTFz5v7hA1x7U
    jwt.verify(req.params.token, secret, (err,decodedToken) => {
        if (err) {
            return res.status(401).send('You dont have permission!')
        };
        res.json(decodedToken)
    });
});

app.listen(5000, () => console.log("Server is running on 5000"))