var express = require('express');
var router = express.Router();
const mongoose  = require('mongoose');

const Conf= require('./confSchema');


router.get('/', function(req, res) {
  Conf.find({}, function (err, doc) {
    if(!err){
      console.log(doc);
      res.render('users',{title: 'Dashboard', list: doc});
    }
  });
});
router.post('/', function (req, res) {
  const pn = req.body.pname;
  const cn = req.body.cname;
  const st = req.body.start;
  const en = req.body.end;
  const newConference = new Conf({name: cn, start: st, end: en, participants: pn});
  newConference.save(function (err) {
    if(err){res.send('couldnt add new conference')}
    else {res.send('you successfully added a new conference')}
  });
});

router.delete('/', function (req, res) {
  const pn = req.body.pname;
  const cn = req.body.cname;
  const st = req.body.start;
  const en = req.body.end;
  const newConference = new Conf({name: cn, start: st, end: en, participants: pn});
  newConference.delete(function (err) {
    if(err){res.send('couldnt add new conference')}
    else {res.send('you successfully added a new conference')}
  });
});


module.exports = router;
