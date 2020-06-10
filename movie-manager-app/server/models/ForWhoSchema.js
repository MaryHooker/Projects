//Model for the people I make movie lists for
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ForWhoSchema = new Schema(
    {
        name: {required:true,type:String},
        movies: [{type:mongoose.Schema.Types.ObjectId,ref:"MovieListManagerMovies"}]
    }
)

//export
module.exports = mongoose.model("MovieListManagerForWho", ForWhoSchema);