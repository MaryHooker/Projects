//User Model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Create new instance
let MovieSchema = new Schema(
    {
        movieTitle:{required:true,type:String},
        details: String,
        forWho:[{type:mongoose.Schema.Types.ObjectId,ref:"MovieListManagerForWho"}]
    }
)

//export model
module.exports = mongoose.model('MovieListManagerMovies', MovieSchema);