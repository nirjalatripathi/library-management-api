const mongoose = require("mongoose");

// Create Book Schema
const bookSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    quantity:{
        type:Number,
        required:true
    }

});


module.exports = mongoose.model("Book",bookSchema);