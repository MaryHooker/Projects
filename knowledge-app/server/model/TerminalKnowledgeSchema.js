//create General terminal knowledge model
//requiring mongoose in order to save schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance
let TerminalKnowledgeSchema = new Schema(
    {
        title:{require:true,type:String},
        description:{type:String},
        source:{type:String}
    }
)

//export model
module.exports = mongoose.model('2020TerminalKnowledge', TerminalKnowledgeSchema);