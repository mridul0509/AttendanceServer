const express = require('express');
let bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

router.get('/', (req,res)=>{
    res.statusCode = 405;
    res.send("Operation Not allowed");
})

router.post('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        success: true,
        status: 'You are successfully logged in!'
    });
})

module.exports = router;