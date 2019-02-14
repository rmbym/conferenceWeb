var express = require('express');
const mongoose  = require('mongoose');
var router = express.Router();

//Getting the models back
var User = require('./uSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to conferences' ,fav: 'Conferences' ,connect: 'connect Yourself' });
});

router.post('/', function(req, res) {
  let nwusername = req.body.pseudo;
  let nwusermdp= req.body.mdp;
  console.log(nwusername, nwusermdp);
  // the read from mongo DB & "auth"
  compareUsers(nwusername,nwusermdp,res,User);
});

module.exports = router;

function compareUsers(ppu,ppm,res,usmod) {
      usmod.find({},function(err, doc){
        if(err){console.log("NNPOOOOOOOO")}
        doc.forEach(function(element){
            if ((ppu == element.name && ppm == element.mdp)) {res.redirect('/users');
            }
        });
      });
}