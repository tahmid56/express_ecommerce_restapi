const User = require('../models/User');
const router = require('express').Router();

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        await newUser.save();
        res.status(201).json({"msg": "User created"});
    }catch(error) {
        res.status(500).json({"msg": error});
    }
    

})

module.exports = router