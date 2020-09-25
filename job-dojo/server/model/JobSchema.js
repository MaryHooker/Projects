//create user model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let JobSchema = new Schema(
    {
        company:{required:true,type:String},
        title:{required:true,type:String},
        jobDescription:{required:true,type:String},
        dateApplied:{type:Date},
        website:{type:String},
        status:{type:String},
    }
)

//export model
module.exports = mongoose.model('devJobs2020', JobSchema);