var express = require('express');
const mongoose  = require('mongoose');
var router = express.Router();

var Conf = require('./confSchema');

router.post('/',(req, res) =>{
    const id= req.body.cid;
    const theme = req.body.cname;
    Conf.findOneAndUpdate(id,{name: theme},(err) =>{
        if(err){console.log("there is an error")}
        else{res.send('you have updated an Conference successfully' );}
    });
});

module.exports = router;