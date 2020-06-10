//User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create new instance
let PersonalSchema = new Schema(
    {
        For:{required:true,type:String},
        password:{required:true,type:String},
    }
)

//export model
module.exports = mongoose.model('PersonalSecrets', PersonalSchema);