var express = require('express');
const mongoose  = require('mongoose');
var router = express.Router();

//Getting the models back
var Conf = require('./confSchema');


router.post('/',(req, res) =>{
    const id= req.body.cid;
    Conf.findByIdAndRemove(id,(err) =>{
        if(err){console.log("there is an error")}
        else{res.send('you have deleted an Conference successfully' );}
    })
});

module.exports = router;