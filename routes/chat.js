var express = require('express');
var router = express.Router();
var io = require('socket.io');

router.get('/', function(req, res, next) {

    res.render('chat', { title: 'Nothing here yet'});
});


module.exports = router;
function chat(){
    io.on('connection', (socket) => {
        console.log(' user connected');
        // the event is chat message
        socket.on('chat message', (msg) => {console.log('message: ' + msg);
            io.emit('chat message', msg);});
        // when the user disconnects
        socket.on('disconnect', function(){console.log('user disconnected');
        });
    });
}