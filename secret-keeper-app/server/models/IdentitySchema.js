//User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create new instance
let IdentitySchema = new Schema(
    {
        For:{required:true,type:String},
        Confidential:{required:true,type:String},
    }
)

//export model
module.exports = mongoose.model('IdentitySecrets', IdentitySchema);