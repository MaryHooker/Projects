//User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create new instance
let SecretSchema = new Schema(
    {
        title:{required:true,type:String},
        secret:{required:true,type:String},
        type:{required:true,type:String},
    }
)

//export model
module.exports = mongoose.model('Secrets', SecretSchema);