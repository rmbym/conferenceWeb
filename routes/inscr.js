var express = require('express');
const mongoose  = require('mongoose');
var router = express.Router();

//Getting the models back
var User = require('./uSchema');

router.get('/',(req, res) =>{
    res.render('inscr',{ title: 'Register Yourself' ,fav: 'Register Now !!' ,inscr: 'please enter Your Personal data & credit card numbers' });
});
router.post('/',(req,res) =>{
    const iu= req.body.name; const im = req.body.mdp;
    addUser(iu,im,res);
});

module.exports = router ;

function addUser(iun,ium,res){
    User.find({name: iun, mdp: ium}, function (err) {
        if(err){res.send('those credentials are already used')}
    var newMember = new User({name:iun,mdp:ium});
        newMember.save(function (err) {
            if(err){res.send('couldnt save your credentials')}
            else{console.log('successfully saved'); res.send('you have been registered ! <br> <a href="/">Go back ?</a>'); }
        });
    });
}