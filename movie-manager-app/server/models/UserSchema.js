//User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create new instance
let UserSchema = new Schema(
    {
        name:{required:true,type:String},
        password:{required:true,type:String},
        email:{required:true,type:String},
        date:{type:Date, default:Date.now}
    }
)

//export model
module.exports = mongoose.model('MovieListManagerUsers', UserSchema);