//Create Personal Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let ToDoPersonalSchema = new Schema(
    {
        personalDate: String,
        personalTask: String,
    }
)

//export model
module.exports = mongoose.model('200424toDoPersonalTasks', ToDoPersonalSchema);