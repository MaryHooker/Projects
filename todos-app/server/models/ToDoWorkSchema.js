//Create Work Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let ToDoWorkSchema = new Schema(
    {
        workDate: String,
        workTask: String,
        workDueDate: String
    }
)

//export model
module.exports = mongoose.model('200424toDoWorkTasks', ToDoWorkSchema);