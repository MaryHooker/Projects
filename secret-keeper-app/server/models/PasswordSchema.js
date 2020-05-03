//User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create new instance
let PasswordSchema = new Schema(
    {
        title:{required:true,type:String},
        password:{required:true,type:String}
    }
)

//export model
module.exports = mongoose.model('Week14passwords', PasswordSchema);