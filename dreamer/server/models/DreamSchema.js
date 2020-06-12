//Create Dream model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


//Create new instance
let DreamSchema = new Schema(
    {
        date:{required:true,type:Date},
        type:{required:true,type:String},
        dreamDescription:{required:true,type:String},
        date:{type:Date, default:Date.now}
    }
)

//export model
module.exports = mongoose.model('dreams', DreamSchema);