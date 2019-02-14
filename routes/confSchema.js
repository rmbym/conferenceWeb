var mongoose = require('mongoose');
// getting the schemas
var schema = mongoose.Schema;

var confSchema = new schema({
        name: String,
        start: String,
        end: String,
        participants: String
    },
    {collection: `conf`} // we did specify the collection we're using for this
);

//the model

var Conf = mongoose.model('Conf',confSchema);

//export the model
module.exports = Conf ;