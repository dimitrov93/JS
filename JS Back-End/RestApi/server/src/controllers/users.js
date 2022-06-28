const api= require('../services/user');

const router = require('express').Router();

router.post('/register', async (req,res) => {
    const {email,password} = req.body;

    try {
        const result = await api.register(email,password);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(400).json({message: err.message});
    }
})
module.exports = router
