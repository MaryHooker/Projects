//Create Bills Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let ToDoBillsSchema = new Schema(
    {
        bill: String,
        payBy: String,
        billDueDate: String
    }
)

//export model
module.exports = mongoose.model('200424toDoBillsTasks', ToDoBillsSchema);