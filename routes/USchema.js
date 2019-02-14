var mongoose = require('mongoose');
// getting the schemas
var schema = mongoose.Schema;

var userSchema = new schema({
        name: String,
        mdp: String
    },
    {collection: `users`}
); // we did specify the collection we're using for this

//the model

var User = mongoose.model('User',userSchema);

//export the module
module.exports = User ;